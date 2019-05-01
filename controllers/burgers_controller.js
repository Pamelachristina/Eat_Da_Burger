var express = require("express");
var router = express.Router();


// Import the model (burger.js) to use its database functions.
var orm = require("../config/orm.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    orm.all("burgers",function(dbData) {
      console.log(dbData);
      res.render("index", { burger_data: dbData});
    })
   
  });

router.put('/burgers/update' , function(req,res) {
  orm.update("burgers",req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});


// Export routes for server.js to use.
module.exports = router;