let Connection = require("../../database/connection");
let db = new Connection();

async function addScreeningQuestionController(req, res) {
  try {
    let { question_category, question } = req.body;
    console.log(question_category, question);
    let completedSuccessfully = await db.addNewScreeningQuestion(
      question_category,
      question
    );
    res.status(200).json({ success: completedSuccessfully });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = addScreeningQuestionController;
