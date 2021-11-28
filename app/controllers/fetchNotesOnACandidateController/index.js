let Connection = require("../../database/connection");
let db = new Connection();

async function fetchNotesOnACandidateController(req, res) {
  try {
    let { candidate_id } = req.body;
    console.log(candidate_id);
    let notes = await db.fetchNotesOnACandidate(candidate_id);
    res.status(200).json({ success: true, payload: notes });
  } catch (err) {
    console.log(err.messsage);
    res.status(500).json({ success: false });
  }
}

module.exports = fetchNotesOnACandidateController;
