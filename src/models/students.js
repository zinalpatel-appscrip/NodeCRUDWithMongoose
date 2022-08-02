const mongoose = require('mongoose')
const validator = require('validator')

//defining the structure of documents 
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This email is already in use"]
    },
})

//defining collection
const StudentData = new mongoose.model('Student',studentSchema)

module.exports = StudentData



