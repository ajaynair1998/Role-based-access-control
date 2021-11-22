let express = require("express");
const fs = require("fs");
// import the db connection class
let Connection = require("../../database/connection");
const checkPrivilege = require("../../middlewares/check-privilege");
let db = new Connection();
let router = express.Router();

router.get("/", checkPrivilege, async (req, res) => {
  let { id } = req.query;
  let { resume_path } = await db.retrieveResumePath(id);
  var pdf = fs.readFileSync(resume_path);
  res.contentType("application/pdf");
  res.send(pdf);
});

module.exports = router;
