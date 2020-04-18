const productToy = require('../models/productToy');
const productToyCtrl = {};


productToyCtrl.getProductToys = async(req, res) => {
    const productToys = await productToy.find();
    res.json(productToys);
};

productToyCtrl.createProductToy = async(req, res) => {
    const newProductToy = new productToy({
        name: req.body.name,
        code: req.body.code,
        description: req.body.description
    });
    await newProductToy.save();
    res.json({
        'status': 'Toy saved'
    });
    console.log(req.body);
};

productToyCtrl.getProductToy = async(req, res) => {
    const find = await productToy.findById(req.params.id);
    res.json(find);
};

productToyCtrl.editProductToy = async(req, res) => {
    const { id } = req.params;
    const newUsr = {
            name: req.body.name,
            code: req.body.code,
            description: req.body.description,
        }
        //(id, objeto nuevo, si no existe, crealo)
    await productToy.findByIdAndUpdate(id, { $set: newProductToy }, { new: true });
    res.json({
        status: 'Toy update'
    });
};

productToyCtrl.deleteProductToy = async(req, res) => {
    await productToy.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Toy deleted'
    });
};

module.exports = productToyCtrl;