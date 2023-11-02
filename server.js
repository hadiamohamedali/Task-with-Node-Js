const express = require('express');
const mongoose = require('mongoose');

let app = express();

//conncet server to mongo server ==> local db
async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/sana4');
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
    }
 }
connect()

//Courses Schema
const courseSchema = new mongoose.Schema({
    name : String,
    CourseCode : Number,
});
//Convert CourseSchmema to Model
let courseModel = new mongoose.model("Courses" ,courseSchema);

//Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    Address: String,
});
//Convert studentSchmema to Model
let studentModel = new mongoose.model("Students" ,studentSchema);

//Insert Data To Database
// Students
let newUser1 = new studentModel({
    name : "Ahmed",
    age : 20,
    phone :" 012558746322",
    Address : "12 mohamedali street"
}).save();
let newUser2 = new studentModel({
    name : "Mohamed",
    age : 21,
    phone :" 0128746966325",
    Address : "13 faysel street"
}).save();
let newUser3 = new studentModel({
    name : "Nada",
    age : 19,
    phone :" 01144785963325",
    Address : "13 mohamedali street"
}).save();
let newUser4 = new studentModel({
    name : "Asmaa",
    age : 18,
    phone :" 017855632941",
    Address : "14 faysel street"
}).save();

//Courses
let course1 = new courseModel({
    name : "Advanced Mathematics",
    CourseCode : 147,
}).save();
let course2 = new courseModel({
    name : "Data Structure",
    CourseCode : 175,
}).save();
let course3 = new courseModel({
    name : "C++ Programming",
    CourseCode : 789,
}).save();
let course4 = new courseModel({
    name : "Networks",
    CourseCode : 741,
}).save();

app.listen(3000,function()
{
    console.log("Server Now is Created")
})

