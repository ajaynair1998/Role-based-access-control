let express = require("express");
// import the db connection class
let Connection = require("../../database/connection");
let compareHash = require("../../services/bcrypt/compare-hash");
const hashPassword = require("../../services/bcrypt/hash-password");
const issueJwt = require("../../services/issue-jwt");
let db = new Connection();
let router = express.Router();

router.post("/", async (req, res) => {
  let { user_name, password } = req.body;
  let completedSuccessfully = await db.getHashedPasswordOfUser(user_name);
  let passwordIsTheSame = compareHash(password, completedSuccessfully);

  if (completedSuccessfully && passwordIsTheSame) {
    let userObject = await db.retrieveUser(user_name);
    let token = await issueJwt(userObject);
    res.status(200).json({ success: true, token: token });
  } else {
    res.status(401).json({
      success: false,
    });
  }
});

module.exports = router;
