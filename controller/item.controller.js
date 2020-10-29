const db = require("../model");
const Item = db.Item;

// Create and Save a new Item
exports.create = (req, res) => {

};

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
    console.log(' Find all')
    Item.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving items."
            });
        });

};

// Find a single Item with an id
exports.findOne = (req, res) => {

};

// Update a Item by the id in the request
exports.update = (req, res) => {

};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Items from the database.
exports.deleteAll = (req, res) => {

};
