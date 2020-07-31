const mongoose = require("mongoose")

// set this to true to run validations on update or place it in the controller//
// mongoose.set("runValidators", true);

mongoose.connect("mongodb://localhost/algosdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Houston! Machine Database to Machine Client and Homosapien input. Communication has been established!"))
    .catch(err => console.log("Houston! Disaster! Our databaase is on the blitz!", err))
