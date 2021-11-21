const { Sequelize } = require("sequelize");
// import model for Application
let Application = require("../../models/Application");

class Connection {
  constructor() {
    this.sequelize = new Sequelize("mydb", "root", "password", {
      host: "localhost",
      dialect: "mysql",
    });
  }

  async addApplication(
    candidate_name,
    position_applied_to,
    resume_path,
    time = Date.now()
  ) {
    await Application.create({
      candidate_name: candidate_name,
      position_applied_to: position_applied_to,
      resume_path: resume_path,
      time: time,
      state: "pending",
    });

    return true;
  }

  async retrieveApplications(state) {
    let applications = await Application.findAll({
      where: {
        state: state,
      },
      attributes: { exclude: "resume_path" },
    });
    return applications;
  }
}

module.exports = Connection;
