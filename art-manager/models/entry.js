const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const entrySchema = new Schema ({
    title: {type: String, required: true},
    type: {type: String, required: true},
    started: {type: String, reuqired: true},
    stage: {type: String, required: true},
    format: String,
    tools: String,
    deadline: String,
    uploaded: {type: String, required: true},
    uploadedTo: Array,
    client: String,
    clientEmail: String,
    cost: String,
    paymentPlan: String,
    payType: String,
    details: String
}, { timestamps: { createdAt: 'created_at' } });

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;