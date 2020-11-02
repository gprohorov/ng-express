module.exports = server => {
    const items = require("../controller/item.controller.js");

    var router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/", items.findAll);

    server.use('/api/items', router);
};
