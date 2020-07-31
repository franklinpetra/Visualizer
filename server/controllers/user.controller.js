const  User  = require('../models/user');

module.exports = {
        // CRUD for Users //
    allUsers : (req, res) => {
        User.find({})
            .then(allUsers => res.json({ message: "Success!", results: allUsers }))
            .catch(err => res.json({ message: "Something went wrong", results: err }))
    },

    oneUser : (req, res) => {
        User.findOne({_id: req.params.id})
            .then(user => res.json({ message: "Success!", results: user }))
            .catch(err => res.json({ message: "Houston, we have a getOne problem!", results: err }))
    },

    createUser : (req, res) => {
        User.create(req.body)
            .then(newUser => res.json({ message: "Success!", results: newUser }))
            .catch(err => res.json({ message: "Houston, we have a creation problem!", results:err }))
    },

    updateUser : (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators:true, new: true })
            .then(updatedUser => res.json({ message: "Success!", results: updatedUser }))
            .catch(error => res.json({ message: "Houston, we have an update problem!", results: err }))
    },

    deleteUser : (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(deletedUser => res.json({ message: "Success!", results: deletedUser }))
            .catch(error => res.json({ message: "Houston, we have a deletion problem!", results: err }))
    },

        // CRUD for Algos //
    allAlgos : (req, res) => {
        User.find({})
            .then(allAlgos => res.json({ message: "Success!", results: allAlgos }))
            .catch(err => res.json({ message: "Houston! Something went wrong getting all the algos!", results: err }))
    },
    createAlgo : (req,res) => {
        User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { algos: req.body }}, { runValidators: true, new: true })
            .then(userWithNewAlgo => res.json({ message: "Success!", results: userWithNewAlgo }))
            .catch(err => res.json({ message: "Error", results: err }));
    },

    deleteAlgo: (req,res) => {
        User.findOneAndUpdate({ _id: req.params.id }, { $pull: { algos: { _id: req.params.pid } } }, { new: true })
        .then(userWithOneLessAlgo => res.json({ message: "Success!", results: userWithOneLessAlgo}))
        .catch(err => res.json({ message: "Error", results: err }));
    },
    oneAlgo: (req,res) => {
        User.find({ "algo._id": req.params.pid })
        .then(oneoneAlgo => res.json({ message: "Success!", results: oneAlgo}))
        .catch(err => res.json({ message: "Error", results: err }));
    },
    updateAlgo: (req,res) => {
        User.findOneAndUpdate({ "algo._id": req.params.pid }, req.body, { runValidators:true, new: true })
        .then(updateAlgo => res.json({ message: "Success!", results: updateAlgo}))
        .catch(err => res.json({ message: "Error", results: err }));
    }
}
