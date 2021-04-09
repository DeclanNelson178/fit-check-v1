// Route specific for transporting outfit files and information
// Parses and sends data segments added from UI upload screen to MongoDB

const router = require("express").Router();
const User = require('../models/userModel');
const jwtAuth = require("../middleware/jwtAuth");

/**
 * Params: friendEmail : string : email of friend
 */
router.put(
  "/follow",
  jwtAuth,
  async (req, res) => {
    try {
      const { friendEmail } = req.body;
      const userId = req.user.id;
      let friend = await User.findOne({ email: friendEmail });

      const user = await User.findByIdAndUpdate({ _id: userId },
        { $push: { following: friend.id }}, { new: true })
        .populate('following');
      friend = await User.findByIdAndUpdate({ _id: friendId }, 
        { $push: { followers: friend.id }}, { new: true })
        .populate('followers');

      res.send({ user, friend });
    } catch (error) {
      console.log(error);
      res.status(400).send("Error while creating outfit. Try  again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
);

router.get(
  "/followers",
  jwtAuth,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.find({ _id: userId }).populate('followers');
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(400).send("Error while creating outfit. Try  again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
);

router.get(
  "/following",
  jwtAuth,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.find({ _id: userId }).populate('following');
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(400).send("Error while creating outfit. Try  again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
);

router.get(
  "/display_friends",
  jwtAuth,
  async (req, res) => {
    try {
      const userId = req.user.id;

      const user = await User.findOne({ _id: userId }).populate('following');
      const retArr = [];

      user.following.forEach(friend => {
        retArr.push({
          friend: friend._id,
          outfits: friend.outfits
        });
      });

      res.send(retArr);
    } catch (error) {
      console.log(error);
      res.status(400).send("Error while creating outfit. Try  again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
);


module.exports = router;
