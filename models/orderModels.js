const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    Items:Array,
    amount:Number,
    status:String,
    createdAt:Date
})

const orderModel=mongoose.model('order',productSchema);
module.exports=orderModel;