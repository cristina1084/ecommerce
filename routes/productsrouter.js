var shoes_arr =[
{
  "name":"Aenean placerat 1",
  "img" :"images/shoes-1.png",
  "price":329
},
{
  "name":"Aenean placerat 2",
  "img" :"images/shoes-2.png",
  "price":329
},
{
  "name":"Aenean placerat 3",
  "img" :"images/shoes-3.png",
  "price":329
},
{
  "name":"Aenean placerat 5",
  "img" :"images/shoes-5.png",
  "price":329
},
{
  "name":"Aenean placerat 6",
  "img" :"images/shoes-6.png",
  "price":329
},
{
  "name":"Aenean placerat 7",
  "img" :"images/shoes-7.png",
  "price":329
},
{
  "name":"Aenean placerat 15",
  "img" :"images/shoes-15.png",
  "price":329
},
{
  "name":"Aenean placerat 10",
  "img" :"images/shoes-10.png",
  "price":329
},
{
  "name":"Aenean placerat 11",
  "img" :"images/shoes-11.png",
  "price":329
}
];

const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
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
        shoes: shoes_arr
      });
  })

  module.exports = router;