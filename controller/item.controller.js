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

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Item
    const item = new Item({
        name: req.body.name,
        description: req.body.description
    });

    // Save Item in the database
    item.save(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the item."
            });
        });
};



