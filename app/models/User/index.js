const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mydb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
// sequelize.sync({ force: true });
const User = sequelize.define("User", {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey,
  },
  role: {
    type: DataTypes.ENUM(["admin", "user"]),
    allowNull: false,
  },
  password: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
});

module.exports = User;
