require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

app.use(express.json({ extended: false }));
//coneecting to db
connectDB();

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/user", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
//usual part of express

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.cyan.bold);
});

//handling unhandled rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);

  //want to fail the app if this happen

  server.close(() => process.exit(1));
});
