var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

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

const app = express();
const PORT = 8080;
const url = "mongodb://mateo:mateo12345@ds229290.mlab.com:29290/macco_db";

//------------------------------------------------------------------------------------------------
// CALLBACKS
//------------------------------------------------------------------------------------------------

function postCallBack(bolso, resolve, reject) {
  const client = new MongoClient(url);
  let promise1 = client.connect();

  promise1.then(() => {

    const db = client.db("macco_db");
    const colBolsos = db.collection("bolsos");

    let promise2 = colBolsos.insertOne(bolso);
    promise2.then((res) => {
      client.close();
      resolve(res);
    });
    promise2.catch((err) => reject(err));
  })
}

function getCallBack(resolve, reject) {
  const client = new MongoClient(url);
  let promise1 = client.connect();

  promise1.then(() => {

    const db = client.db("macco_db");
    const colBolsos = db.collection("bolsos");

    let promise2 = colBolsos.find({}).toArray();
    promise2.then((bolsos) => {
      client.close();

      resolve(bolsos);
    });
    promise2.catch((err) => reject(err));
  });
}

//------------------------------------------------------------------------------------------------
// SERVICES
//------------------------------------------------------------------------------------------------

router.get("/mateo", (req, res) => {
  res.send(url)
});

router.get("/", (req, res) => {
  console.log("llego al endpont");

  getCallBack(
    (bolsos) => res.json(bolsos),
    (err) => res.json(err)
  );

});

router.post("", (req, res) => {
  let body = req.body;

  postCallBack(body,
    (bolso) => res.json(bolso),
    (err) => res.json(err)
  );
});

module.exports = router;