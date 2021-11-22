const fs = require("fs");
const path = require("path");

// using the json web token library
const jwt = require("jsonwebtoken");

// importing the public key to verify the authenticity of token
const pathToKey = path.join(__dirname, "..", "key-pair", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf-8");

// main function which takes in the token and verifies and returns the userName
async function verifyAndCheckWhetherUserIsAdmin(token) {
  // main function which verifies
  let isValid = jwt.verify(
    token,
    PUB_KEY,
    { algorithms: "RS256" },
    (err, payload) => {
      if (err) {
        return [false, err];
        // return response
      } else {
        return [
          payload.role === "admin" ? true : false,
          { user_name: payload.sub, role: payload.role },
        ];
      }

      // return response
    }
  );

  // if the jwt is valid then query the db and get the userName
  if (!isValid[0]) return false;
  return true;
}

module.exports = verifyAndCheckWhetherUserIsAdmin;
