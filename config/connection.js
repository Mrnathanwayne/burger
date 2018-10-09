var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Monday12",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Connected");
});

module.exports = connection;