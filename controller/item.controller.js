const db = require("../model");
const Item = db.items;

// Retrieve all items from the database.
exports.findAll = (req, res) => {
     console.log('Find all call');
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
