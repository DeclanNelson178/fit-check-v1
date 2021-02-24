const File = require("../models/fileModel");
const Outfit = require('../models/outfitModel');
const router = require("express").Router();
const { upload } = require('../middleware/uploadFile');
const jwtAuth = require('../middleware/jwtAuth');

router.post("/", [jwtAuth, upload.single("file")], async (req, res) => {
    try {
      let { title, tags } = req.body;
      const { path, mimetype } = req.file;
      const file = new File({
        filePath: path,
        fileMimetype: mimetype,
        owner: req.user.id,
      });
      await file.save();

      tags = tags.split(',')
      const outfit = new Outfit({
        title: title,
        tags: tags,
        img: file,
        owner: req.user.id,
      })
      await outfit.save();

      res.send("outfit created successfully");
    } catch (error) {
      console.log(error);
      res.status(400).send("Error while creating outfit. Try again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

// get all of a users outfits
router.get('/', jwtAuth, async (req, res) => {
  try {
    // get user id from jwtAuth

    // query all users outfits
    // make sure to populate img
    
    // sort outfits by creation date

    // return outfits
  } catch (error) {
    res.status(400).send('Error while getting outfits. Try again later.');
  }
});

router.get('/:outfitId', async (req, res) => {
  try {
    const outfitId = req.params.id;
    // get user id from jwt auth

    // get the outfit id (pass user id param to verify correct ownership)
    // make sure to populate img

    // return outfit
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

module.exports = router;
