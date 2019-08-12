var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
  res.render(
    "index",
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

app.get("/products",(req,res)=>{
  res.render("products");
})

app.get("/single",(req,res)=>{
  res.render("single");
})

app.get("/contact",(req,res)=>{
  res.render("contact");
})

app.get("/account",(req,res)=>{
  res.render("account");
})

app.get("/checkout",(req,res)=>{
  res.render("checkout");
})

app.listen(8080,()=>{
  console.log("Listening");
})
