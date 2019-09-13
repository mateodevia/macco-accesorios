var express = require("express");
var router = express.Router();
//------------------------------------------------------------------------------------------------
// CONFIGURATIONS
//------------------------------------------------------------------------------------------------

//Conf for sending access contro allow headers
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.use(express.json());

//------------------------------------------------------------------------------------------------
// SERVICES
//------------------------------------------------------------------------------------------------


router.post("/login", function (req, res, next) {
  console.log(req.body);
  let usuario = req.body.usuario;
  let clave = req.body.clave;

  if (usuario === "macco" && clave === "julios31") {
    res.send("OK")
  }
  else {
    res.send("INVALID")
  }
});

module.exports = router;
