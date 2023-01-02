const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        school: String,
        program: String,
        schoolEmail: String,
        term: String,
        firstHack: String,
        source: String,
        github: String,
        linkedIn: String,
        goal: String,
        team: String,
        strengths: String,
    },
    {
        collection: "HackTheBreakUsers",
    }
);

mongoose.model("HackTheBreakUsers", UserDetailsSchema);