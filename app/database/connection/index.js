const { Sequelize } = require("sequelize");
// import model for Application
let Application = require("../../models/Application");
let User = require("../../models/User");
let Screening_Question = require("../../models/Screening-Question");
let hashPassword = require("../../services/bcrypt/hash-password");

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
    skills,
    email,
    time = Date.now()
  ) {
    await this.sequelize.sync({});
    await Application.create({
      candidate_name: candidate_name,
      position_applied_to: position_applied_to,
      resume_path: resume_path,
      skills: skills,
      email: email,
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
      console.log(hashedPassword);
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
  async getHashedPasswordOfUser(user_name) {
    try {
      let user = await User.findOne({ where: { user_name: user_name } });
      return user.password ? user.password : false;
    } catch (err) {
      console.log(err.message);
    }
  }

  async retrieveUser(user_name) {
    try {
      let user = await User.findOne({ where: { user_name: user_name } });
      return { user_name: user.user_name, role: user.role };
    } catch (err) {
      console.log(err.message);
    }
  }

  async addNewScreeningQuestion(question_category, question) {
    try {
      await Screening_Question.create({
        question_category: question_category,
        question: question,
      });
      return true;
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }

  async getScreeningQuestionsForACategory(question_category) {
    try {
      let questions = await Screening_Question.findAll({
        where: {
          question_category: question_category,
        },
      });
      console.log(questions);
      return questions;
    } catch (Err) {
      console.log(Err.message);
      return false;
    }
  }
}

module.exports = Connection;
