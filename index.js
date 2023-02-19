const express=require("express");
const jwt=require("jsonwebtoken");

const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

const {CustomerModel}=require("./model/customer.model");

const connection=require("./configs/db");

const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("the home page");
})


//the route to register the user
app.post("/register",(req,res)=>{

    try{
        const CustomerData=req.body;
        const customer=new CustomerModel(CustomerData);
        customer.save();
        res.send("The new customer has been registered successfully");
    
    }
    catch{
        console.log("the customer could not be registered");
    }
   
})


//the route to login the customer to the app
app.post("/login", async (req,res)=>{
    const {email,password}=req.body;
    try{
        const customer=await CustomerModel.find({email,password});
        if(customer.length>0){
            res.send("the login was successful");
        }
        else{
            res.send("please enter correct details");
        }

    }
    catch{
        console.log("error");
    }
})



//login and generate the token
app.post("/loginwithtoken",async(req,res)=>{
    const {email,password}= req.body;
    const token= jwt.sign({course:"backend"},"masai");
    try{
        const customer=await CustomerModel
    }
    catch{

    }

})




app.listen(1700,async (req,res)=>{
   try{
    await connection;
    console.log("The server is connected at port 1700");
   }
   catch{
    console.log("the server could not be connected");
   }
    
})