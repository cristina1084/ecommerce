var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
  res.render("index");
})

app.get("/index",(req,res)=>{
  res.render("index");
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
