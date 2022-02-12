require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const Controller = require("./Controller/controller");
const { database } = require("./utils/database");
const app = new express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/login", Controller.signin);
app.use("/signup", Controller.signup);
app.use("/user/register", Controller.userRegister);
app.use("/user/getlist/:company_id", Controller.userGetlist);
app.use("/user/update/:id", Controller.userUpdate);
app.use("/user/delete/:id", Controller.userDelete);

app.use((error, req, res, next) => {
  console.log("error find ", error);
  if (error.code === "EBADCSRFTOKEN") {
    error.statusCode = 403;
    error.message = "Access Denied ";
  }
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(process.env.PORT || 5000, () => {
  database.connect((err) => {
    if (err) throw err;
    console.log("server started successfully");
  });
});
