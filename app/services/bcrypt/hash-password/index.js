const bcrypt = require("bcrypt");

async function test() {
  const hash = await bcrypt.hash("ajay", 10);
  let data = await bcrypt.compare("ajay", hash);
  console.log(data);
}

async function hashPassword(password) {
  try {
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = hashPassword;
