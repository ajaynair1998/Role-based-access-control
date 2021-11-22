const bcrypt = require("bcrypt");

async function test() {
  const hash = await bcrypt.hash("ajay", 10);
  let data = await bcrypt.compare("ajay", hash);
  console.log(data);
}

async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

module.exports = hashPassword;
