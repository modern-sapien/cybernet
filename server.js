require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

// ROUTES
app.get('/', (req, res) =>  {
  res.send("hello from express");
})

app.get('/api/v1/users', (req, res) =>  {
  res.status(200).json({success: true, msg: "Show all users"});
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cybernet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

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
