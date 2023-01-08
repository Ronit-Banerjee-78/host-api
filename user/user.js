const moongoose = require("mongoose");

const userSchema = new moongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    project: {
        type: String,
        required: true

    },
    link: {
        type: String,
        required: false


    }
})
module.exports = moongoose.model("Submission", userSchema)