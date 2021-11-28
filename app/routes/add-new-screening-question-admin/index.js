let express = require("express");
let addScreeningQuestionController = require("../../controllers/addAScreeningQuestionController");
const checkPrivilege = require("../../middlewares/check-privilege");
let router = express.Router();

router.post("/", checkPrivilege, addScreeningQuestionController);

module.exports = router;
