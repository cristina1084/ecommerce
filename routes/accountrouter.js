const express = require('express');
const router = express.Router();

var mongo = require('mongoose');
var bodyparser = require('body-parser');
var url = "mongodb://localhost/ecommercedb";

var user = require('../model/user');

router.use(bodyparser.urlencoded({extended:true}));

mongo.connect(url, {useNewUrlParser:true}, (err)=>{
  if (err) throw err;
  else console.log("Database Connected");
});

router.get("/",(req,res)=>{
    res.render(
      "account",
      {
        nav:[
          {link:"/products", title:"Men"},
          {link:"/products", title:"Women"},
          {link:"/products", title:"Kids"},
          {link:"/products", title:"Sports"},
          {link:"/products", title:"Brands"}
        ],
        subNav:[
          {subTitle:"Shop", subCategory:[
            {categoryLink:"/products", categoryTitle:"New Arrivals"},
            {categoryLink:"/products", categoryTitle:"Men"},
            {categoryLink:"/products", categoryTitle:"Women"},
            {categoryLink:"/products", categoryTitle:"Accessories"},
            {categoryLink:"/products", categoryTitle:"Kids"},
            {categoryLink:"/products", categoryTitle:"Brands"},
          ] },
          {subTitle:"Style Zone", subCategory:[
            {categoryLink:"/products", categoryTitle:"Men"},
            {categoryLink:"/products", categoryTitle:"Women"},
            {categoryLink:"/products", categoryTitle:"Brands"},
            {categoryLink:"/products", categoryTitle:"Kids"},
            {categoryLink:"/products", categoryTitle:"Accessories"},
            {categoryLink:"/products", categoryTitle:"Style Videos"},
          ] },
          {subTitle:"Popular Brands", subCategory:[
            {categoryLink:"/products", categoryTitle:"Levis"},
            {categoryLink:"/products", categoryTitle:"Persol"},
            {categoryLink:"/products", categoryTitle:"Nike"},
            {categoryLink:"/products", categoryTitle:"Edwin"},
            {categoryLink:"/products", categoryTitle:"New Balance"},
            {categoryLink:"/products", categoryTitle:"Jack & Jones"},
            {categoryLink:"/products", categoryTitle:"Paul Smith"},
            {categoryLink:"/products", categoryTitle:"Ray-Ban"},
            {categoryLink:"/products", categoryTitle:"Wood Wood"},
          ] }
        ]
      });
  })

router.post("/add",(req,res)=>{
  var u1 = new user();
  u1.fname = req.body.fname;
  u1.lname = req.body.lname;
  u1.email = req.body.email;
  u1.pass1 = req.body.pass1;
  u1.pass2 = req.body.pass2;
  u1.save((err)=>{
    if (err) throw err;
    else res.send("User added");
  });
});

module.exports = router;