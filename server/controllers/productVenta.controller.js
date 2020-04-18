const productVenta = require('../models/productVenta');
const productVentaCtrl = {};


productVentaCtrl.getproductVentas = async(req, res) => {
    const productVentas = await productVenta.find(req.body);
    res.json(productVentas);
};

productVentaCtrl.createProductVenta = async(req, res) => {
    const newProductVenta = new productVenta({
        id_user: req.body.id_user,
        id_prodcutToy: req.body.id_prodcutToy,
        date: req.body.date,
        quantity: req.body.quantity

    });
    await newProductVenta.save();
    res.json({
        'status': 'Venta saved'
    });
};

productVentaCtrl.getProductVenta = async(req, res) => {
    const find = await productVenta.findById(req.params.id);
    res.json(find);
};

productVentaCtrl.editProductVenta = async(req, res) => {
    const { id } = req.params;
    const newProductVenta = {
            id_user: req.body.id_user,
            id_prodcutToy: req.body.id_prodcutToy,
            date: req.body.date,
            quantity: req.body.quantity
        }
        //(id, objeto nuevo, si no existe, crealo)
    await productVenta.findByIdAndUpdate(id, { $set: newProductVenta }, { new: true });
    res.json({
        status: 'Venta updated'
    });
};

productVentaCtrl.deleteContact = async(req, res) => {
    await productVenta.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Venta deleted'
    });
};

module.exports = productVentaCtrl;