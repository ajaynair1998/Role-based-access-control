let express = require("express");
// import the db connection class
let Connection = require("../../database/connection");

let db = new Connection();
let router = express.Router();
const multer = require("multer");
const storageConfig = require("../../configs/multer-storage");
const upload = multer({ storage: storageConfig });

router.post("/", upload.single("resume"), async (req, res) => {
  console.log(req.file, req.body);
  let { path, originalname } = req.file;
  let { userName, position, skills } = req.body;
  console.log(skills);
  await db.addApplication(userName, position, path, skills);
  res.status(200).json({ success: true });
});

module.exports = router;
