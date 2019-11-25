const Entry         = require("../models/entry.js");
const data          = require("./seeds.json");
const mongoose      = require("./connection.js");

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

Entry.deleteMany({})
.then(() => {
    return Entry.collection.insertMany(data);
})
.then(() => {
    process.exit();
});