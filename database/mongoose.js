var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/To-Do',{useNewUrlParser:true},()=>{
    console.log('database online');
});
module.exports={
    mongoose:mongoose
};