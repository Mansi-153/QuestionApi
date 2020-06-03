const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Demo",(error)=>{
    if(!error) console.log("Success");
    else console.log("Error");
});
const courseModel = require('./course.model');