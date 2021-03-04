from __future__ import division
import flask 
import json
import argparse
import numpy as np
import torch
import sys
from mmcv import Config
from mmcv.runner import load_checkpoint

from mmfashion.core import AttrPredictor
from mmfashion.core import CatePredictor
from mmfashion.models import build_predictor
from mmfashion.utils import get_img_tensor

class FitCheckPredictor:
	def __init__(self, args):
		self.args = {
			"checkpoint":"checkpoint/CateAttrPredict/vgg/global/latest.pth",
			"config":"configs/category_attribute_predict/global_predictor_vgg.py",
			"use_cuda":False
		}
	def build_model(self):
		self.cfg = Config.fromfile(self.args["config"])

		# global attribute predictor will not use landmarks
		# just set a default value
		self.landmark_tensor = torch.zeros(8)

		self.model = build_predictor(self.cfg.model)
		load_checkpoint(self.model, self.args["checkpoint"], map_location='cpu')
		print('model loaded from {}'.format(self.args["checkpoint"]))
		if self.args["use_cuda"]:
		    self.model.cuda()
		    self.landmark_tensor = self.landmark_tensor.cuda()

		self.model.eval()
	def get_json_attr(self, prob, predictor, top):
		if isinstance(prob, torch.Tensor):
			data = prob.data.cpu().numpy()
		elif isinstance(prob, np.ndarray):
			data = prob
		indexes = np.argsort(data[0])[::-1]
		top = 10
		retVal = []
		for i in indexes[:top]:
			retVal.append({"name":predictor.attr_idx2name[i], "probability":float(data[0][i])})
		return retVal
		
	def get_json_cate(self, prob, predictor, top):
		if isinstance(prob, torch.Tensor):
			data = prob.data.cpu().numpy()
		elif isinstance(prob, np.ndarray):
			data = prob
		indexes = np.argsort(data[0])[::-1]
		top = 10
		retVal = []
		for i in indexes[:top]:
			retVal.append({"name":predictor.cate_idx2name[i], "probability":float(data[0][i])})
		return retVal

	def get_image_results(self, img):
		img_tensor = get_img_tensor(img, self.args["use_cuda"])
		# predict probabilities for each attribute/category
		attr_prob, cate_prob = self.model(
			img_tensor, attr=None, landmark=self.landmark_tensor, return_loss=False)
		attr_predictor = AttrPredictor(self.cfg.data.test)
		cate_predictor = CatePredictor(self.cfg.data.test)
		attributes = self.get_json_attr(attr_prob, attr_predictor, 10)
		categories = self.get_json_cate(cate_prob, cate_predictor, 10)
		return json.dumps({"attributes":attributes, "categories":categories})


predictor = FitCheckPredictor(sys.argv)
predictor.build_model()



app = flask.Flask(__name__)
@app.route("/get-analysis", methods=['POST'])
def home(): # route handler function
	# returning a response
	filename = flask.request.get_json(silent=True)['filename']
	res = flask.Response(predictor.get_image_results(filename))
	res.headers['Content-Type'] = "application/json"
	return res

app.run(port=8000, debug = True)