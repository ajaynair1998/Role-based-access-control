let express = require("express");
// import the db connection class
let Connection = require("../../database/connection");
let db = new Connection();
let router = express.Router();

router.post("/", async (req, res) => {
  let { user_name, password, role } = req.body;
  let completedSuccessfully = await db.addUser(user_name, password, role);
  console.log(completedSuccessfully);
  res.status(200).json({ success: completedSuccessfully });
});

module.exports = router;
