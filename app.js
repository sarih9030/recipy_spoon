const express=require('express');
const app=express();
const morgan=require('morgan');
const {recipeRouter}=require('./api/routes/recipies');
// const {userRoutes}=require('./api/routes/users');
const mongoose = require('mongoose');
// mongoose.connect(`mongodb://localhost:27017/recipes`,{useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connection.on('connected',()=>
// {
//     console.log("connected to db");
// })


 app.use((req,res,next)=>{
     res.header('Access-Control-Allow-Origin','*');
     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,Authorization");
     if(req.method=="OPTIONS"){
         res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
         return res.status(200).json({});
     }
     next();
 });
app.use('/',recipeRouter);
// app.use('/recipies',recipeRouter);
// app.get('https://api.spoonacular.com/recipes/complexSearch',(req,res)=>
// {
//     console.log(res.json());
// }
// )
// app.get('/',(req,res)=>{
//     res.status(200).json({mesaage:'hello world'
// })});
// app.get('https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey=17441dd6b521483ba03d6e4492f45a70&includeNutrition=true',
// (req,res)=>{
    
// });
module.exports=app;