const router = require('express').Router();
const TestModel = require('../models/testModel');

router.post('/', async (req, res) => {

  // retrieve the data from the request
  const { title } = req.body;

  // construct the test model
  const newTest = new Test({
    title,
  });

  // save test model
  try {
    const savedTest = await newTest.save();
    res.json(savedTest);
  } catch(err) {
    console.error(err);
  }
});

router.get('/', async (req, res) => {
  const tests = await Test.find({});
  res.json(tests);
});

router.get('/:id', async (req, res) => {
  const test = await Test.findById(req.params.id);
  res.json(test);
})

module.exports = router;