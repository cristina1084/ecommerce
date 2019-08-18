var mongo = require('mongoose');

var schema = mongo.Schema;

var productSchema = new schema({
    prod_name:{type:String, required:true},
    prod_image:String,
    prod_price:Number
})

var prodcutModel = mongo.model("products", productSchema);

module.exports = prodcutModel;