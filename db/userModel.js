import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String,
    username: String,
    phoneNum: Number,
    tasks: [{
        description: String,
        when: Date,
    }]
})

const User = mongoose.model("User", userSchema)

export default User
