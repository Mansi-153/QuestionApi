const express =  require('express');
const mongoose = require('mongoose');
const router = express.Router();
const CourseModel = mongoose.model("Course");
var course = new CourseModel();
router.get('/list',(req , res)=>{
    var sort = {id : 1};
    /*var course = new CourseModel();
    course.courseName="Node";
    course.courseId="1";
    course.courseDuration="Node";
    course.courseFees="Node";
    course.save();*/
    CourseModel.find({}).lean().sort(sort)
    .exec((err, docs)=>{
        res.render("list",{data: docs});    
    });
});
router.get('/list/:id', (req, res)=>{
    CourseModel.find((err, docs)=>{
        const course = docs.find(c => c.id ===parseInt(req.params.id));
        if(!course) res.status(404).send("The course with the given Id was not found");
        else res.send(course); 
        res.send(req.params.id);
    });
});
router.get('/add', (req, res)=>{
    res.render("add-ques");
})
router.post('/add', (req, res)=>{
        console.log(req.body);
        course.id= req.body.id,
        course.question= req.body.question,
        course.optionA=req.body.optionA,
        course.optionB=req.body.optionB,
        course.optionC=req.body.optionC,
        course.optionD=req.body.optionD,
        course.answerId=req.body.answerId,
        course.explaination=req.body.explaination
        course.save((err, doc)=>{
            if(!err) res.redirect("/course/add");
            else res.send("Error Occured");        
        })
    });
    router.get('/update/:id',(req, res)=>{
        CourseModel.findOneAndRemove({id: req.params.id},{new : this.true}, (err, doc) => {
        res.render("update.hbs",{id: req.params.id});
    })
});
    router.post('/update/:id', (req, res)=>{
        CourseModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }, (err, doc) => {
           if(err) res.send(err);
           else res.send(doc);
    
    })});
    router.get('/delete/:id', (req, res) => {
        CourseModel.findOneAndRemove({id: req.params.id},{new : this.true}, (err, doc) => {
            if (!err) {
                res.redirect('course/list');
            }
            else { console.log('Error in employee delete :' + err); }
        });
    });
module.exports= router;