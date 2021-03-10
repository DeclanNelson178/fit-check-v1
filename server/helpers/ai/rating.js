const axios = require('axios');
const FormData = require('form-data');
var json = require('../../data/category_avg.json');
const math = require('mathjs');

const getRating = async (filePath) => {
  var score = Math.floor(Math.random() * 101);
  var attr = [
    { name: 'sleeve', probability: 0.11371153593063354 },
    { name: 'knit', probability: 0.08053527027368546 },
    { name: 'print', probability: 0.07799622416496277 },
    { name: 'maxi', probability: 0.06594035029411316 },
    { name: 'lace', probability: 0.06241264566779137 },
    { name: 'denim', probability: 0.05586576834321022 },
    { name: 'striped', probability: 0.0461270734667778 },
    { name: 'pink', probability: 0.04370826110243797 },
    { name: 'chiffon', probability: 0.04324888437986374 },
    { name: 'stripe', probability: 0.04276769608259201 }
  ]
  try {
    // request to flask server with file path
    const formData = new FormData();
    formData.append('filename', filePath.toString());
    const url = 'http://127.0.0.1:8000/get-analysis';
    console.log('calling ai');
    const res = await axios({
      method: "post",
      url: url,
      data: {
        filename: filePath
      },
    }).then(res => {
      const category = res.data['categories'][0]['name'];
      attr = res.data['attributes'];
      const graded_attr = json[category.toString()];
      
      let givenTotal = 0;
      let expectedTotal = 0;
      attr.forEach(attr => {
        const name = attr['name'];
        givenTotal += attr['probability'];
        expectedTotal += graded_attr[name];
      });

      const givenMean = givenTotal / attr.length;
      const expectedMean = expectedTotal / attr.length;
      const diff = math.abs(expectedMean - givenMean);
      console.log(score);
      score = 100 - (diff * 3000);
      console.log(score);
      console.log(attr);
    })
  } catch (err) {
    console.log(err);
    console.log('AI Engine not online, using random score');
  }
  return [score, attr];
}

module.exports = getRating;