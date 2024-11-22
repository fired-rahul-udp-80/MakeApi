// const express = require("express");
// const router = express.Router();

// const {dynamicController,getAllResponse,getApi} = require("../controllers/dynamicController");

// router.post("/save-dynamic-data",dynamicController);
// router.get("/get-all-response",getAllResponse);
// router.get("/get-api/:modelName",(req, res) =>{
//     res.send("hellow world");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  dynamicController,
  getAllResponse,
  getApi,
} = require("../controllers/dynamicController");

router.post("/save-dynamic-data", dynamicController);
router.get("/get-all-response", getAllResponse);

// Fetch data by model name
router.get("/get-api/:modelName", getApi);

module.exports = router;

