const router = require('express').Router();
const UserModel = require('../models/userModel');

router.post('/signup', async (req, res) => {

  // retrieve the data from the request
  const { name, email, password } = req.body;

  // construct the test model
  const newUser = new User({
    name,
    email,
    password
  });

  // save test model
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch(err) {
    console.error(err);
  }
});


router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ 'email': email, 'password': password });
    res.json(user);
  } catch(err) {
    console.error(err);
  }
});

module.exports = router;