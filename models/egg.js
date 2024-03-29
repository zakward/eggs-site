const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eggSchema = mongoose.Schema({
    name: {
        type: String,
        default: "A and B's Farm Fresh Eggs"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    quantity: {
        type: Number,
        required: true,
        validate: {
            validator: function(value) {
                // Ensure quantity is a positive integer
                return Number.isInteger(value) && value > 0;
            },
            message: 'Quantity must be a positive integer'
        }
    }
});


module.exports = mongoose.model("egg", eggSchema);
