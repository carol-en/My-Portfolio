
// ==================
// Dependencies 
// ==================
const express               = require("express");
const app                   = express();
const port                  = 3000;
const mongoose              = require("mongoose");
const methodOverride        = require("method-override");

// ==================
// Middleware
// ==================
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: false}));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-view").createEngine());


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


// ==================
// Listen
// ==================
app.listen(port, () => {
    console.log("Listening––");
});

