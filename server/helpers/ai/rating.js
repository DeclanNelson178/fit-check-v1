const axios = require('axios');
const FormData = require('form-data');

const getRating = (filePath) => {
  let score = Math.floor(Math.random() * 101);
  let attr = [
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
    const url = 'http://127.0.0.1:8000/get-attributes';
    console.log('calling ai');
    axios({
      method: "post",
      url: url,
      data: {
        filename: filePath
      },
    }).then(res => {
      console.log(res.data);
      attr = res.data['atttributes']
    })
  } catch (err) {
    console.log(err);
    console.log('AI Engine not online, using random score');
  }

  return [score, attr];
}

module.exports = getRating;