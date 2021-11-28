let express = require("express");
let getScreeningQuestionsController = require("../../controllers/getScreeningQuestionsController");
const checkPrivilege = require("../../middlewares/check-privilege");
let router = express.Router();

router.get("/", getScreeningQuestionsController);

module.exports = router;
