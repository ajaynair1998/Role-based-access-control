let verifyAndCheckWhetherUserIsAdmin = require("../../services/verify-jwt-token");

async function checkPrivilege(req, res, next) {
  try {
    let token = req.get("Authorization");
    console.log(token);
    let isPrivilaged = await verifyAndCheckWhetherUserIsAdmin(token);
    if (!isPrivilaged)
      res.status(401).json({ success: false, message: "Unauthorized" });
    else {
      next();
    }
  } catch (err) {
    console.log(err.msg);
    res.status(401).json({ success: false });
  }
}

module.exports = checkPrivilege;
