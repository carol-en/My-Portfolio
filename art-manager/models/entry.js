const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const entrySchema = new Schema ({
    name: {type: String, required: true},
    type: {type: String, required: true},
    stage: {type: String, required: true},
    status: {type: String, required: true},
    format: String,
    tools: String,
    uploaded: {type: String, required: true},
    uploadedTo: Array,
    client: String,
    clientEmail: String,
    cost: Number,
    paymentPlan: String,
    payType: String,
    deadline: String,
    details: String
}, { timestamps: { createdAt: 'created_at' } });

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;