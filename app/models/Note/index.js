const { Sequelize, DataTypes } = require("sequelize");
const User = require("../User");
const sequelize = new Sequelize("mydb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
sequelize.sync({ alter: true });
const Note = sequelize.define("Note", {
  note: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER(11),
  },
});

module.exports = Note;
