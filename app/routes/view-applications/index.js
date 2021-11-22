let express = require("express");
// import the middleware to check privilage
let checkPrivilege = require("../../middlewares/check-privilege");
// import the db connection class
let Connection = require("../../database/connection");
let db = new Connection();
let router = express.Router();

router.get("/", checkPrivilege, async (req, res) => {
  console.log(req.file, req.body);
  let { state } = req.query;
  let applications = await db.retrieveApplications(state);
  res.status(200).json({ success: true, payload: applications });
});

module.exports = router;
