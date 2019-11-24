
// ==================
// Dependencies 
// ==================
const express           = require('express');
const app               = express();
const router            = express.Router();
const port              = 3000;
const mongoose          = require("./db/connection.js");
const methodOverride    = require("method-override");
const plannerController = require("./controllers/planner.js");

// ==================
// Middleware
// ==================
app.use(express.static("public"));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use("/planner", plannerController);


// ==================
// Listen
// ==================
app.listen(port, () => {
    console.log("Listening––");
});

