const mongoose = require('mongoose');
const { Schema } = mongoose;

const productToySchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: true },

});

module.exports = mongoose.model('ProductToys', productToySchema);