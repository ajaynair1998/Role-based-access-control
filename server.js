const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;

// import routes
let sendApplication = require("./app/routes/send-application");
let viewApplications = require("./app/routes/view-applications");
let actionOnApplication = require("./app/routes/action-on-application");
let viewResume = require("./app/routes/view-resume");
let signUp = require("./app/routes/sign-up");
let logIn = require("./app/routes/log-in");
let addNewScreeningQuestion = require("./app/routes/add-new-screening-question-admin");
let getScreeningQuestionsForACandidate = require("./app/routes/get-screening-questions-candidate");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// route to send applications
app.use("/api/send-application", sendApplication);
// route to view applications
app.use("/api/view-applications", viewApplications);
// route to change the state of an application
app.use("/api/change-state-of-application", actionOnApplication);
// route to get a resume
app.use("/api/view-resume", viewResume);
// route to sign-up
app.use("/api/sign-up", signUp);
// route to log-in
app.use("/api/log-in", logIn);
// route to add-new-screening-question
app.use("/api/add-new-screening-question", addNewScreeningQuestion);
// route to get-screening-questions
app.use(
  "/api/screening-questions-candidate",
  getScreeningQuestionsForACandidate
);

app.listen(PORT, () => {
  console.log(`API server listening at http://localhost:${PORT}`);
});
