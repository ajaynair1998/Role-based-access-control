const bcrypt = require("bcrypt");

async function compareHash(password, hash) {
  try {
    console.log(password, hash);
    let isSame = await bcrypt.compare(password, hash);
    return isSame;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = compareHash;
