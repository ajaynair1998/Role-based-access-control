const bcrypt = require("bcrypt");

async function compareHash(password, hash) {
  let isSame = await bcrypt.compare(password, hash);
  return isSame;
}

module.exports = compareHash;
