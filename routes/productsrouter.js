const express = require('express');
const router = express.Router();
var bodyparser = require('body-parser');
var path = require('path');

var prod = require('../model/product');

var multer = require('multer'); //module to upload files

var storage =   multer.diskStorage({  
    destination: (req, file, callback)=>{  
      callback(null, './public/images');  
    },  
    filename: (req, file, callback)=>{  
      callback(null, file.originalname);  
    }  
  });  
  
var upload = multer({ storage : storage}).single('pimage');  

router.use(bodyparser.urlencoded({extended:true}));


router.get("/",(req,res)=>{
  prod.find({},(err,result)=>{
    if (err) throw err;
    else 
      res.render(
        "products",
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
          ],
          shoes: result
        });
  })
})

router.get("/addproduct",(req,res)=>{
  res.render(
  "addproduct",
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

router.post("/add", upload, (req,res)=>{
  var p1 = new prod();
  p1.prod_name = req.body.pname;
  p1.prod_image = req.file.filename;
  p1.prod_price = req.body.price;

  p1.save((err)=>{
    if (err) throw err;
    else res.redirect("/products");
  });
});
module.exports = router;