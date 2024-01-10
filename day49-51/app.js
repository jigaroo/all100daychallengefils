const fs = require('fs');
const path =require('path');

const express = require('express');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.render('index');
    // const htmlFilepath = path.join(__dirname,'views','index.html');
    // res.sendFile(htmlFilepath);
});

app.get('/restaurants',function(req,res){

    const filepath = path.join(__dirname,'data','restaurants.json');
    const fileData = fs.readFileSync(filepath);
    const storedRestaurants = JSON.parse(fileData);

    res.render('restaurants',{ numberOfRestaurants: storedRestaurants.length,restaurants:storedRestaurants });
    // const htmlFilepath = path.join(__dirname,'views','restaurants.html');
    // res.sendFile(htmlFilepath);
});
app.get('/about',function(req,res){
    res.render('about');
    // const htmlFilepath = path.join(__dirname,'views','about.html');
    // res.sendFile(htmlFilepath);
});
app.get('/confirm',function(req,res){
    res.render('confirm');
    // const htmlFilepath = path.join(__dirname,'views','confirm.html');
    // res.sendFile(htmlFilepath);
});
app.get('/recommend',function(req,res){
    res.render('recommend');
    // const htmlFilepath = path.join(__dirname,'views','recommend.html');
    // res.sendFile(htmlFilepath);
});

app.post('/recommend',function(req,res){
   const restaurants = req.body;
   const filepath = path.join(__dirname,'data','restaurants.json');
   const fileData = fs.readFileSync(filepath);
   const storedRestaurants = JSON.parse(fileData);

   storedRestaurants.push(restaurants);

   fs.writeFileSync(filepath,JSON.stringify(storedRestaurants));

   res.redirect('/confirm');

});

app.listen(3000);