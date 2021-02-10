const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: `./config/config.env` });

// Connect to database
connectDB();

// routes
const auth = require("./routes/auth");
const users = require("./routes/users");
const images = require("./routes/images");
const comments = require("./routes/comments");

const PORT = process.env.PORT || 3001;

// Middleware
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(express.static("client/build"));
// app.use(express.static(path.join(__dirname, "/uploads")));
// app.use("/uploads", express.static("uploads"));
app.use(fileupload());

// Mount routers
app.use("/api/v1/users", users);
app.use("/api/v1/images", images);
app.use("/api/v1/comments", comments);
app.use("/api/v1/auth", auth);

app.use(errorHandler);

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

const server = app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`.yellow.bold.inverse);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.inverse);
  // close server & exit process
  server.close(() => process.exit(1));
});
