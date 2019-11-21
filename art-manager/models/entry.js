const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const entrySchema = new Schema ({
    // Info here
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;