const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// routes here:

const authRoutes = require("./app/modules/authorization/auth.routes");
app.use(express.json({ extended: false, type: "application/json" }));

app.use(cors());

app.use("/api/auth", authRoutes);
// app.use("/api/dashboard", dashboardRoutes);
// app.use("/api/projects", projectRoutes);
app.listen(3000, () => {
  console.log("Your app is listening on port 3000");
});

console.log("console A");
mongoose.connect("mongodb://localhost:27017",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,},)
    .then((connectObj) => {
    console.log(`connection to database established`);
  })
  .catch((err) => {
    console.log(`db error ${err.message}`);
    process.exit(-1);
  });

