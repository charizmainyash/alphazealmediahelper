const mongoose=require("mongoose");
const workSchema=new mongoose.Schema({
    link:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,

    },
    description:{
        type: String,
        required: true,
    },
},{timestamps:true});
const WORK=mongoose.model("work",workSchema);
module.exports=WORK;
    