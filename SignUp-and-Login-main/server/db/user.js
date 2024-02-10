const mongoose=require('mongoose');
const uschema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
});

module.exports=mongoose.model('user',uschema);