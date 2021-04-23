const axios = require("axios");
const FormData = require("form-data");
var json = require("../../data/clothing_store/men-rank.json");
const math = require("mathjs");


/**
 * 
 * @param {*} filePath: image to send to AI microservice
 * @returns an array [score, attribute, category]
 * 
 * Upload an outfit and return the perceived attributes and category, as well as calculate an outfit
 * rating.
 * If the AI microservice is not running, return hardcoded fields
 */
const getRating = async (filePath) => {
  /*
  var score = Math.floor(Math.random() * 101);
  var attr = [
    { name: "sleeve", probability: 0.11371153593063354 },
    { name: "knit", probability: 0.08053527027368546 },
    { name: "print", probability: 0.07799622416496277 },
    { name: "maxi", probability: 0.06594035029411316 },
    { name: "lace", probability: 0.06241264566779137 },
    { name: "denim", probability: 0.05586576834321022 },
    { name: "striped", probability: 0.0461270734667778 },
    { name: "pink", probability: 0.04370826110243797 },
    { name: "chiffon", probability: 0.04324888437986374 },
    { name: "stripe", probability: 0.04276769608259201 },
  ];
  let categories = [];
  try {
    // request to flask server with file path
    const formData = new FormData();
    formData.append("filename", filePath.toString());
    const url = "http://127.0.0.1:8000/get-analysis";
    console.log("calling ai");
    const res = await axios({
      method: "post",
      url: url,
      data: {
        filename: filePath,
      },
    }).then((res) => {
      const category = res.data["categories"][0]["name"];
      attr = res.data["attributes"];
      categories = res.data["categories"];
      const graded_attr = json[category.toString()];

      let givenTotal = 0;
      let expectedTotal = 0;
      attr.forEach((attr) => {
        const name = attr["name"];
        givenTotal += attr["probability"];
        expectedTotal += graded_attr[name];
      });

      const givenMean = givenTotal / attr.length;
      const expectedMean = expectedTotal / attr.length;
      const diff = math.abs(expectedMean - givenMean);
      console.log(score);
      score = 100 - diff * 3000;
      console.log(score);
      console.log(attr);
    });
  } catch (err) {
    console.log(err);
    console.log("AI Engine not online, using random score");
  }
  return [Math.floor(score), attr, categories];*/
  let score = 90
  let big_score = 90
  let attr = {}
  let categories = {}
  try {
    // request to flask server with file path
    const formData = new FormData();
    formData.append("filename", filePath.toString());
    const url = "http://127.0.0.1:8000/get-analysis";
    console.log("calling ai");
    const res = await axios({
      method: "post",
      url: url,
      data: {
        filename: filePath,
      },
    }).then((res) => {
      categories = res.data["categories"]
      top_category = categories[0].name || 0
      next_category = categories[1].name || 0
      score = json[top_category] + json[next_category]
      best = json['Best']
      score /= best*2
      score *= 100
      console.log("SCORE IS "+ score)
    });
    console.log(categories)
    return [Math.floor(score), attr, categories]
  } catch (err) {
    console.log(err);
    console.log("AI Engine not online, using random score");
  }
};

module.exports = getRating;
