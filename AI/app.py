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
from mmfashion.models import build_predictor
from mmfashion.utils import get_img_tensor

class FitCheckPredictor:
	def __init__(self, args):
		self.args = {
			"checkpoint":"checkpoint/Predict/vgg/global/latest.pth",
			"config":"configs/attribute_predict/global_predictor_vgg_attr.py",
			"use_cuda":True
		}
	def build_model(self):
		self.cfg = Config.fromfile(self.args["config"])

		# global attribute predictor will not use landmarks
		# just set a default value
		self.landmark_tensor = torch.zeros(8)
		self.cfg.model.pretrained = None
		self.model = build_predictor(self.cfg.model)
		load_checkpoint(self.model, self.args["checkpoint"], map_location='cpu')
		if self.args["use_cuda"]:
		    self.model.cuda()
		    self.landmark_tensor = self.landmark_tensor.cuda()

		self.model.eval()
	def get_image_attr(self, img):
		img_tensor = get_img_tensor(img, self.args["use_cuda"])
		# predict probabilities for each attribute
		attr_prob = self.model(
		    img_tensor, attr=None, landmark=self.landmark_tensor, return_loss=False)
		attr_predictor = AttrPredictor(self.cfg.data.test)

		if isinstance(attr_prob, torch.Tensor):
		        data = attr_prob.data.cpu().numpy()
		elif isinstance(attr_prob, np.ndarray):
		    data = attr_prob

		indexes = np.argsort(data[0])[::-1]
		top = 10
		retVal = {"attributes": [
		]}
		for i in indexes[:top]:
			retVal["attributes"].append({"name":attr_predictor.attr_idx2name[i], "probability":float(data[0][i])})
		return json.dumps(retVal) 

predictor = FitCheckPredictor(sys.argv)
predictor.build_model()




app = flask.Flask(__name__)
@app.route("/attributes/<filename>", methods=['GET'])
def home(filename): # route handler function
	# returning a response
	res = flask.Response(predictor.get_image_attr(filename))
	res.headers['Content-Type'] = "application/json"
	return res

app.run(debug = True)