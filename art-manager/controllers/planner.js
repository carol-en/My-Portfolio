const express           = require('express');
const router            = express.Router();
const Entry             = require("../models/entry.js");

// ==================
// Routes
// ==================


// index route
router.get("/", (req, res) => {
    Entry.find({}, (err, allProjects) => {
        if(err) {
            res.send(err.message);
        } else {
            res.render("Index", {
                projects: allProjects
            })
        }
    });
});

// new route
router.get("/new", (req, res) => {
    res.render("New");
});

// post route
router.post("/", (req, res) => {
    Entry.create(req.body, (err, newEntry) => {
        if(err) {
            res.send(err.message);
        } else {
            res.redirect("/planner");
        }
    });
});

// show route
router.get("/:id", (req, res) => {
    Entry.findById(req.params.id, (err, data) => {
        if(err) {
            res.send(err.message);
        } else {
            res.render("Show", {
                project: data
            });
        }
    });
});

// edit route
router.get("/:id/edit", (req, res) => {
    Entry.findById(req.params.id, (err, data) => {
        if(err) {
            res.send(err.message);
        } else {
            res.render("Edit", {
                project: data
            });
        }
    });
});

// update route
router.put("/:id", (req, res) => {
    Entry.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) {
            res.send(err.message);
        } else {
            res.redirect("/planner/" + req.params.id);
        }
    });
});

// delete route
router.delete("/:id", (req, res) => {
    Entry.findByIdAndRemove(req.params.id, (err, data) => {
        if(err) {
            res.send(err.message);
        } else {
            res.redirect("/planner");
        }
    })
});

module.exports = router;

