
// ==================
// Dependencies 
// ==================
const express           = require('express');
const app               = express();
const port              = 3000;
const mongoose          = require('mongoose');
const methodOverride    = require("method-override");
const Entry             = require("./models/entry.js");

// ==================
// Middleware
// ==================
app.use(express.static("public"));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// ==================
// Database
// ==================
mongoose.connect("mongodb://localhost:27017/artplanner", ({useNewUrlParser: true, useUnifiedTopology: true}));
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

// ==================
// Routes
// ==================


// index route
app.get("/planner", (req, res) => {
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
app.get("/planner/new", (req, res) => {
    res.render("New");
});

// post route
app.post("/planner", (req, res) => {
    Entry.create(req.body, (err, newEntry) => {
        if(err) {
            res.send(err.message);
        } else {
            res.redirect("/planner");
        }
    });
});

// show route
app.get("/planner/:id", (req, res) => {
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
app.get("/planner/:id/edit", (req, res) => {
    res.render("Edit");
});

// update route
app.put("/planner/:id", (req, res) => {
    res.send("Updated");
});

// delete route
app.delete("planner/:id", (req, res) => {
    res.send("Deleting...");
})


// ==================
// Listen
// ==================
app.listen(port, () => {
    console.log("Listening––");
});

