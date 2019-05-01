// Import MySQL connection.
var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  

  
  }}

// Export the orm object for the model (burger.js).
module.exports = orm;