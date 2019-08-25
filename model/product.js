var mongo = require('mongoose');

var schema = mongo.Schema;

var productSchema = new schema({
    prod_id: {type:String, required:true},
    prod_name:String,
    prod_image:String,
    prod_price:Number
})

var prodcutModel = mongo.model("products", productSchema);

module.exports = prodcutModel;