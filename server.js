const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 19001;

// import routes
let sendApplication = require("./app/routes/send-application");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/send-application", sendApplication);

app.listen(PORT, () => {
  console.log(`API server listening at http://localhost:${PORT}`);
});
