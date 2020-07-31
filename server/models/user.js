const mongoose = require('mongoose');
const AlgoSchema = require("./algos");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,"Name is required."],
        minlength: [3,"That is far to short a name for us.  Please add more than 3 characters."],
    },

    lastName: {
        type: String,
        required: [true,"Name is required."],
        minlength: [3,"That is far to short a name for us.  Please add more than 3 characters."],
    },
    email: {
        type: String,
        required: [true,"Email is required." ],
        validate:{ 
            validator: function(v){
                let re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/; 
                return re.test(v)
            },
            message: "Email is invalid. Typo perhaps?"
        },
    },
    password: {
        type: String,
        required: [true,"Password is required." ],
    },
    confirmPassword: {
        type: String,
        required: [true,"Password is required." ],
    },

    algos: [AlgoSchema],
    
},   { timestamps: true });

const User =  mongoose.model("User", UserSchema);
module.exports = User;