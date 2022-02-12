require("dotenv").config({ path: "../.env" });
const { database } = require("../utils/database");

exports.signin = (req, res, next) => {
  const company_mail = req.body.company_mail;
  const password = req.body.password;
  console.log(req.body);
  try {
    var sql = `select * from company where company_mail='${company_mail}' and password='${password}'`;
    database.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length <= 0) {
        res.status(500).json({ message: "Wrong Email or Password" });
      } else {
        console.log(result.length);
        res.status(200).json({ message: "Login Sucessfull" });
      }
    });
  } catch (err) {
    {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};
exports.signup = (req, res, next) => {
  const company_name = req.body.company_name;
  const company_mail = req.body.company_mail;
  const password = req.body.password;
  const company_id = Date.now();

  console.log(company_id);
  try {
    var sql = `INSERT INTO company (company_id, company_name,company_mail,password) VALUES ('${company_id}','${company_name}', '${company_mail}','${password}')`;
    database.query(sql, function (err, result) {
      if (err) throw err;
    });
    res.status(200).json({ message: "register Sucessfully" });
  } catch (err) {
    {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};
exports.userRegister = (req, res, next) => {
  const employee_name = req.body.employee_name;
  const employee_mail = req.body.employee_mail;
  const company_id = req.body.company_id;
  const employee_id = Date.now();

  console.log(company_id);
  try {
    var sql = `INSERT INTO employee (company_id, employee_name,employee_mail,employee_id) VALUES ('${company_id}','${employee_name}', '${employee_mail}','${employee_id}')`;
    database.query(sql, function (err, result) {
      if (err) throw err;
    });
    res.status(200).json({ message: "register Sucessfully" });
  } catch (err) {
    {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};
exports.userGetlist = (req, res, next) => {
  console.log("comming id ", req.params.company_id);

  try {
    var sql = `select * from employee WHERE company_id = '${req.params.company_id}'`;
    database.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length <= 0) {
        res.status(500).json({ message: "data not found" });
      } else {
        console.log(result.length);
        res.status(200).json(result);
      }
    });
  } catch (err) {
    {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};
exports.userUpdate = (req, res, next) => {
  const employee_name = req.body.employee_name;
  const employee_mail = req.body.employee_mail;
  const employee_id = req.params.id;

  try {
    var sql = `UPDATE employee SET employee_name = '${employee_name}',employee_mail='${employee_mail}' WHERE employee_id = '${employee_id}'`;
    database.query(sql, function (err, result) {
      if (err) throw err;
    });
    res.status(200).json({ message: "Updated Sucessfully" });
  } catch (err) {
    {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};
exports.userDelete = (req, res, next) => {
  try {
    var sql = `delete from  employee  WHERE employee_id = '${req.params.id}'`;
    database.query(sql, function (err, result) {
      if (err) throw err;
    });
    res.status(200).json({ message: "deleted Sucessfully" });
  } catch (err) {
    {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};
