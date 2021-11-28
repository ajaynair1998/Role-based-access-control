let Connection = require("../../database/connection");
let db = new Connection();

async function getScreeningQuestionsController(req, res) {
  try {
    let { question_category } = req.query;
    console.log(question_category);
    let questions = await db.getScreeningQuestionsForACategory(
      question_category
    );
    res.status(200).json({ success: true, payload: questions });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = getScreeningQuestionsController;
