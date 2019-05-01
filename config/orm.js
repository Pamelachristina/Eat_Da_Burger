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
    })
  },

    update: function(tableInput, condition, cb) {
      connection.query("UPDATE" +tableInput+ ' SET devoured=true WHERE id=' +condition+ ';', function(err, result) {
        if(err)throw err;
        cb(result);
      })
      
    },

  
  }

// Export the orm object for the model (burger.js).
module.exports = orm;