
// ==================
// Dependencies 
// ==================
const express           = require('express');
const app               = express();
const port              = 3000;
const mongoose          = require('mongoose');
const methodOverride    = require("method-override");

// ==================
// Middleware
// ==================
app.use(express.static("public"));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// ==================
// Database
// ==================
mongoose.connect("mongodb://localhost:27017/mongooseStore", ({useNewUrlParser: true, useUnifiedTopology: true}));
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

// ==================
// Routes
// ==================


// index route
app.get("/planner", (req, res) => {
    res.render("Index");
});

// new route
app.get("/planner/new", (req, res) => {
    res.render("New");
});

// update route
app.post("/planner", (req, res) => {
    res.send("New Page Made");
});

// show route
app.get("/planner/:id", (req, res) => {
    res.render("Show");
});

// edit route
app.get("/planner/:id/edit", (req, res) => {
    res.render("Edit");
});

// update route
app.get("/planner/:id", (req, res) => {
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

