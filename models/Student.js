const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
name: String,
age: Number,
city: String
});

module.exports =
mongoose.model(
"Student",
studentSchema
);