const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
},
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema)
module.exports = User;