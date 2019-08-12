const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.render(
      "checkout",
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

  module.exports = router;