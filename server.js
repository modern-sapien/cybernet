const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const path = require("path");
const morgan = require("morgan")
const connectDB = require("./config/db");

// Load env vars
dotenv.config({path: `./config/config.env`});

// Connect to database
connectDB();

// middleware
const logger = require("./middleware/logger");

// routes
const users = require("./routes/users");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use("/api/v1/users", users);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cybernet", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
