const router = require("express").Router();
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  // retrieve the data from the request
  const { name, email, password } = req.body;

  // construct the test model
  const newUser = new User({
    name,
    email,
    password,
  });

  // save test model
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    console.error(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      // const accessToken = jwt.sign({ 'id': user._id }, process.env.SUPER_SECRET_ACCESS_TOKEN);
      res.json({ status: 200 });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
