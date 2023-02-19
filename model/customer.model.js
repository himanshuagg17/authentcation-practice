const mongoose=require("mongoose");

const CustomerSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const CustomerModel=mongoose.model("customer",CustomerSchema);

module.exports={
    CustomerModel
}