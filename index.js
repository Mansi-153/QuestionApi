const connection  = require('./model');
const express = require('express');
const app = express();
const path = require('path');
const expressHandleBars = require('express-handlebars');
const bodyParser = require('body-parser');
const CourseControllers = require("./controllers/courses");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("views", path.join(__dirname,"/views/"))
app.engine("hbs", expressHandleBars({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts"
}));
app.set("view engine", "hbs");
app.use("/course", CourseControllers);

app.listen("3000",()=>{
    console.log("Listening on 3000");
});