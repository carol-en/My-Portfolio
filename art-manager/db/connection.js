const mongoose          = require('mongoose');

mongoose.connect("mongodb://localhost:27017/artplanner", ({useNewUrlParser: true, useUnifiedTopology: true}));
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

mongoose.Promise = Promise;

module.exports = mongoose;
