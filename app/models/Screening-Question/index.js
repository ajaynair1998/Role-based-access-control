const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mydb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
sequelize.sync({ alter: true });
const Screening_Question = sequelize.define("Screening_Question", {
  question_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Screening_Question;
