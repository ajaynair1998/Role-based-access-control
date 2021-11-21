const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;

// import routes
let sendApplication = require("./app/routes/send-application");
let viewApplications = require("./app/routes/view-applications");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// route to send applications
app.use("/api/send-application", sendApplication);
// route to view applications
app.use("/api/view-applications", viewApplications);

app.listen(PORT, () => {
  console.log(`API server listening at http://localhost:${PORT}`);
});
