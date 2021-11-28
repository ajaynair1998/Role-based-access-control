let Connection = require("../../database/connection");
let db = new Connection();

async function addNotesOnACandidateController(req, res) {
  try {
    let { candidate_id, note } = req.body;
    await db.addNoteOnACandidate(candidate_id, note);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err.messsage);
    res.status(500).json({ success: false });
  }
}

module.exports = addNotesOnACandidateController;
