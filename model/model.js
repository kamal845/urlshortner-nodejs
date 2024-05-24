const mongoose = require('mongoose');
const urlSchema=new mongoose.Schema({
SNo:{
    type:Number,
    required:false
},
url : {
    type : String,
    required : true,
    unique : true
},
address : {
    type : String,
    required : true,
    unique : true
}
}
,{
    timestamps: true
});
module.exports=mongoose.model('url',urlSchema);