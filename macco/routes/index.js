var express = require("express");
var router = express.Router();
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary');
//------------------------------------------------------------------------------------------------
// CONFIGURATIONS
//------------------------------------------------------------------------------------------------

//Cloudinary conf
cloudinary.config({
  cloud_name: 'drfggfn8f',
  api_key: '694159519369718',
  api_secret: 'jwkPS4klzsaEHd-eNf8HIiPkHW8'
});


//Conf for receiving formData (files)
router.use(fileUpload({
  useTempFiles: true
}));

//Conf for sending access contro allow headers
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//------------------------------------------------------------------------------------------------
// SERVICES
//------------------------------------------------------------------------------------------------

//SERVICE: This method receives an image files and uploads it to cloudinary
router.post("/uploadimage", function (req, res, next) {
  let image = req.files.image;
  let body = req.body;

  cloudinary.v2.uploader.upload(image.tempFilePath, {
    "folder": "/macco/bolsos"
  }, (err, res2) => {
    if (err) throw err;
    res.send(res2.url);
  });
});

module.exports = router;
