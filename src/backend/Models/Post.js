const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  Name:{type:String,require:true},
  Email:{type:String,require:true},
  PhoneNumber:{type:Number,require:true}
})

module.exports = mongoose.model('post',postSchema);
