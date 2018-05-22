var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(reg, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    
    burger.all(function(data) {
        var allObjs = {
            burgers: data
        };
        console.log(allObjs);
        res.render("index", allObjs);
    });
});

//router.post("/burger");
module.exports = router;
