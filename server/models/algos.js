const mongoose = require('mongoose');


const AlgoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"An Algo name is required."],
        minlength: [2,"That is far to short a name for us.  Please add more than 2 characters."],
    },

    image: {
        type: String,
        required: [true,"An algo gif or image is required."],
    },

    desc: {
        type: String,
        required: [true,"A description is a required field." ],
    },

    worst: {
        type: String,
        required: [true,"The worst speed of your algo is a required field." ],
    },

    best: {
        type: String,
        required: [true,"The best speed of your algo is a required field." ],
    },

    aver: {
        type: String,
        required: [true,"The best speed of your algo is a required field." ],
    },

    quote: {
        type: String,
        required: [true,"A quote about the algo is a required field." ],
    },

    code: {
        type: String,
    },

},   { timestamps: true });


module.exports = AlgoSchema;
