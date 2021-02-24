const File = require("../models/fileModel");
const Outfit = require('../models/outfitModel');
const router = require("express").Router();
const { upload } = require('../middleware/uploadFile');
const jwtAuth = require('../middleware/jwtAuth');
const path = require("path");

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

// get all of a users outfits data (not image)
router.get('/', jwtAuth, async (req, res) => {
  try {

  } catch (error) {
    res.status(400).send('Error while getting outfits data. Try again later.');
  }
});

// get users single outfit data (not image)
router.get('/:outfitId', jwtAuth, async (req, res) => {
  try {

  } catch (error) {
    res.status(400).send('Error while getting outfit data. Try again later.');
  }
});

// get an outfit image
router.get('/image/:outfitId', jwtAuth, async (req, res) => {
  try {
    const outfitId = req.params.outfitId;
    // get user id from jwt auth
    const currUser = req.user.id;

    // get the outfit id (pass user id param to verify correct ownership)
    // make sure to populate img 
    const outfit = await Outfit.findOne({ _id: outfitId, owner: currUser }).populate('img');
    
    // return outfit
    res.sendFile(path.join(__dirname, '..', outfit.img.filePath));
  } catch (error) {
    console.log(error);
    res.status(400).send('Error while getting outfit image. Try again later.');
  }
});

module.exports = router;
