let express = require("express");
let addNotesOnACandidateController = require("../../controllers/addNotesOnACandidateController");
const checkPrivilege = require("../../middlewares/check-privilege");
let router = express.Router();

router.post("/", checkPrivilege, addNotesOnACandidateController);

module.exports = router;
