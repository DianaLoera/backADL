const mongoose = require('mongoose');
const { Schema } = mongoose;

const productVentaSchema = new Schema({
    id_productToy: { type: String, required: true },
    id_user: { type: String, required: true },
    date: { type: Date, required: true },
    quantity: { type: Number, required: true },

});

module.exports = mongoose.model('ProductVenta', productVentaSchema);