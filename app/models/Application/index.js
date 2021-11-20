const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mydb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
sequelize.sync({ force: true });
const Application = sequelize.define("Application", {
  candidate_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position_applied_to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resume_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  time: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.ENUM(["pending", "accepted", "rejected"]),
  },
});

module.exports = Application;
