let express = require("express");
let fetchNotesOnACandidateController = require("../../controllers/fetchNotesOnACandidateController");
const checkPrivilege = require("../../middlewares/check-privilege");
let router = express.Router();

router.get("/", checkPrivilege, fetchNotesOnACandidateController);

module.exports = router;
