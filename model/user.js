var mongo = require('mongoose');

var schema = mongo.Schema;

var userSchema = new schema({
    fname : {type:String, required:true},
    lname : {type:String, required:true},
    email : {type:String, required:true},
    pass1 : {type:String, required:true},
    pass2 : {type:String, required:true},
});

var userModel = mongo.model("users", userSchema);

module.exports = userModel;