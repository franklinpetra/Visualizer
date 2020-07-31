const controller = require("../controllers/user.controller");

module.exports = function(app){
    //CRUD routes for Users//
    app.get("/api/algos/all", controller.allUsers);
    app.post("/api/algos/new", controller.createUser);
    app.get("/api/algos/:id", controller.oneUser);
    app.put("/api/algos/:id/update", controller.updateUser);
    app.delete("/api/algos/:id/delete", controller.deleteUser);

    //CRUD routes for oneToMany Algos//
    app.get("/api/algos/", controller.allAlgos);
    app.put("/api/algos/:id/newAlgo", controller.createAlgo);
    app.get("/api/algos/:id/:aid", controller.oneAlgo);
    app.put("/api/algos/:id/:aid/update", controller.updateAlgo);
    app.put("/api/algos/:id/:aid/delete", controller.deleteAlgo);
}