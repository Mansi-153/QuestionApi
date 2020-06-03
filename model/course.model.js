const mongoose = require('mongoose');
var CourseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: "Required"
    },
question : {
        type : String,
        required: "Required"
    },
    optionA : {
        type : String,
        required: "Required"
    },
    optionB : {
        type : String,
        required: "Required"
    },
    optionC : {
        type : String,
        required: "Required"
    },
    optionD : {
        type : String,
        required: "Required"
    },
    answerId : {
        type : String,
    },
    explaination : {
        type : String,
    }
});
mongoose.model("Course", CourseSchema);