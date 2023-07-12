const mongoose=require('mongoose');

const Schema=mongoose.Schema

const schema=new Schema({
    title:String,
    description:String,
    age:Number,
})

module.exports=mongoose.model('iten',schema)
