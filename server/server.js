const express = require("express");
const cors = require("cors");

const port = 8000;
const app = express();

require("./config/mongoose.config");

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended:true})
);


//this particular require statement needs to be placed below the app.use directions //
require("./routes/user.routes")(app);

app.listen(port, () => console.log(`Houston! We have a connection! The server is fired up and listening on port ${port}`));
