var mongoose= require('mongoose');

var Todo=mongoose.model("List",{
    text:{
        type:String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Date,
        default: null
    },
    createdAt:{
        type:Date,
        default: null
    }
});
module.exports = {Todo
};