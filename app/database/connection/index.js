const { Sequelize } = require("sequelize");
// import model for Application
let Application = require("../../models/Application");
let User = require("../../models/User");
let hashPassword = require("../../services/bcrypt/hash-password");

class Connection {
  constructor() {
    this.sequelize = new Sequelize("mydb", "root", "password", {
      host: "localhost",
      dialect: "mysql",
    });
    this.sequelize.sync({ force: false });
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

  async changeStateOfApplication(id, newState) {
    let update = await Application.update(
      { state: newState },
      {
        where: {
          id: id,
        },
      }
    );
    return update ? true : false;
  }

  async retrieveResumePath(id) {
    let resumePath = await Application.findOne({
      where: {
        id: id,
      },
      attributes: ["resume_path"],
    });
    return resumePath;
  }

  async addUser(name, password, role = "user") {
    try {
      let hashedPassword = await hashPassword(password);
      let addedUserSuccessfully = await User.create({
        user_name: name,
        password: hashedPassword,
        role: role,
      });

      return addedUserSuccessfully;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Connection;
