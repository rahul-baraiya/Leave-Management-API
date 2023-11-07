require("dotenv").config();
const port = process.env.PORT || 1212;
const DATABASE_URL = process.env.DATABASE_URL;
const connectDB = require("./Config/connectDB");
const express = require("express");
const app = express();
const leaveRoutes = require("./Routes/leaveRoute");
const cors = require("cors");
const multer = require("multer");
const upload = multer();

app.use(upload.array());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(DATABASE_URL);

app.get("/", (req, res) => {
  res.send("Welcome to the home page of the Leave Management API's");
});

app.use("/api", leaveRoutes);

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on the server.`);
  err.status = "Fail to load..";
  err.statusCode = 404;
  next(err);
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 400;
  error.status = error.status || "Error";
  res.status(error.statusCode).json({
    success: false,
    status: error.statusCode,
    message: error.message,
  });
});

app.listen(port, () => {
  console.log("Server running on :", process.env.APP_BASE_URL + `${port}`);
});
