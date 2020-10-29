module.exports = app => {
    const items = require("../controller/item.controller.js");

    var router = require("express").Router();

    // Retrieve all Tutorials
    router.get("/", items.findAll);


};
