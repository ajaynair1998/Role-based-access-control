let express = require("express");
// import the middleware to check privilage
let checkPrivilege = require("../../middlewares/check-privilege");
// import the db connection class
let Connection = require("../../database/connection");
let db = new Connection();
let router = express.Router();

router.get("/", checkPrivilege, async (req, res) => {
  console.log(req.file, req.body);
  let { state, searchTerm, pageNumber, limit } = req.query;
  let applications = await db.retrieveApplications(
    state,
    searchTerm,
    pageNumber,
    limit
  );
  res.status(200).json({ success: true, payload: applications });
});

module.exports = router;
