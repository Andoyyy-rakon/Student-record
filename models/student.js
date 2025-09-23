const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Student name is required"],
        trim: true,
        maxLength: [50, "Student name cannot exceed 50 characters"]
    },
    age: {
        type: Number,
        required: [true, "Student age is required"],
        min: [0, "Student age cannot be below 0"]
    },
    course: {
        type: String,
        required: [true, "Student course is required"],
        minLength: [3, "Student course must be at least 3 characters"]
    },
    year: {
        type: Number,
        required: [true, "Student year is required"],
        min: [1, "Student year cannot be less than 1"],
        max: [4, "Student year cannot exceed 4"]
    }
});

module.exports = mongoose.model("Student", studentSchema);
