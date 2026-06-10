const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    "mongodb://127.0.0.1:27017/project3"
);

app.use(
    express.static("public")
);

app.post(
    "/student",
    async (req, res) => {

        const data =
            new Student({

                name: req.body.name,
                age: req.body.age,
                city: req.body.city

            });

        await data.save();

        res.send(
            "Student Saved"
        );

    });
app.get("/allstudents", async (req, res) => {

    try {

        const data =
            await Student.find();

        res.json(data);

    }

    catch (err) {

        res.send(err.message);

    }

});
app.get("/students", (req, res) => {

    res.sendFile(
        __dirname + "/public/students.html"
    );

});
// UPDATE
app.get("/update", async (req, res) => {

    try {

        await Student.updateMany(

            { name: "Ali" },

            {
                $set: {
                    city: "Mumbai"
                }
            }

        );

        res.send("Students Updated");

    }

    catch (err) {

        res.send(err.message);

    }

});

app.listen(
    5000,
    () => {

        console.log(
            "Server Started"
        );

    });