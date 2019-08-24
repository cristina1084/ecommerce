const express = require('express');
const router = express.Router();

var bodyparser = require('body-parser');

var user = require('../model/user');

router.use(bodyparser.urlencoded({extended:true}));

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

router.post("/signup",(req,res)=>{
  var u1 = new user(req.body);
  u1.save((err)=>{
    if (err) throw err;
    else res.redirect("/account");
  });
});

router.post("/login",(req,res)=>{
  user.find({email:req.body.email, pass1:req.body.pass1}, (err,result)=>{
    if (err) throw err;
    else {
      if (result.length!=0) res.redirect("/products");
      else res.redirect("/account");
    }
  });
});

module.exports = router;