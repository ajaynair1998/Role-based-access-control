const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mydb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
sequelize.sync({});
const User = sequelize.define("User", {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM(["admin", "user"]),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
