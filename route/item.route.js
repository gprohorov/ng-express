module.exports = server => {
    const items = require("../controller/item.controller.js");

    var router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/", items.findAll);

    router.post("/", items.create);




    server.use('/api/v1/items', router);
};
