const mongoose=require("mongoose");
mongoose.set('strictQuery', false);


const connection=mongoose.connect("mongodb+srv://himanshu:himanshu@cluster0.cyv3gab.mongodb.net/restaurant?retryWrites=true&w=majority")

module.exports={
    connection
}