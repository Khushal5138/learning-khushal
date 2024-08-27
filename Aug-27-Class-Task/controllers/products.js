const Product = require("../models/products");
const bcrypt = require("bcrypt");
const { validationResult , body } = require("express-validator");


exports.getSpecificProduct = async function (req , res , next) {

    let result = await Product.findById(req.params.id);
    res.json(result);
};

exports.getSpecificProductByName = async function (req , res , next) {

    let result = await Product.find({name : req.params.name});
    res.json(result);
};

exports.getSpecificProductByAvailability = async function (req , res , next) {

    let result = await Product.find( { availability : req.params.availability });
    res.json(result);
};

exports.getSpecificProductByPrice = async function (req , res , next) {

    const result = await Product.find({ price: { $gt: req.params.price } } );
    res.json(result);
};

exports.getProduct =  async function(req, res, next) {
  

    let results  = await Product.find();
    res.json(results);
};

exports.postProduct = async function (req , res , next) {

    try {
        const { name, price , availability } = req.body;
        const newProduct = new Product({ name, price , availability });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProduct = async function ( req , res , next ) {

    let idDelete = req.params.id;
    let result = await Product.findByIdAndDelete(idDelete);
    res.json(result);

};

exports.putProduct = async function ( req , res , next ) {

    let { name , price , availability } = req.body;
    let result = await Product.findByIdAndUpdate(req.params.id , { name , price , availability } );
    res.json(result);
};

exports.patchProduct = async function ( req , res , next ) {

    let { name , price , availability } = req.body;
    let result = await Product.findByIdAndUpdate(req.params.id , { name , price , availability } );
    res.json(result);
};
