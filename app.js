var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


var productrouter = require('./routes/productsrouter');
var accountrouter = require('./routes/accountrouter');
var checkoutrouter = require('./routes/checkoutrouter');
var singlerouter = require('./routes/singlerouter');
var contactrouter = require('./routes/contactrouter');

app.use(express.static(path.join(__dirname, 'public')));

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
    "name":"Aenean placerat 13",
    "img" :"images/shoes-13.png",
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
    "name":"Aenean placerat 8",
    "img" :"images/shoes-8.png",
    "price":329
  }
];

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
      ],
      shoes:shoes_arr
    });
})

app.use("/products", productrouter);
app.use("/account", accountrouter);
app.use("/checkout", checkoutrouter);
app.use("/single", singlerouter);
app.use("/contact", contactrouter);

app.listen(8080,()=>{
  console.log("Listening");
})
