let express = require("express");
// import the db connection class
let Connection = require("../../database/connection");
const checkPrivilege = require("../../middlewares/check-privilege");
let db = new Connection();
let router = express.Router();

router.post("/", checkPrivilege, async (req, res) => {
  let { id, newState } = req.body;
  let completedSuccessfully = await db.changeStateOfApplication(id, newState);
  console.log(id, newState);
  res.status(200).json({ success: completedSuccessfully });
});

module.exports = router;
