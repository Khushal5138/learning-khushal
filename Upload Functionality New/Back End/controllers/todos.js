const Cars = require("../models/carsreg");
const bcrypt = require("bcrypt");
const Author = require("../models/authors");
const { check, validationResult } = require("express-validator");


exports.postTodos = [
    check('name').trim().escape().not().isEmpty().withMessage('Name cannot be empty'),
    check('status').isBoolean().withMessage('Status must be a boolean value'),
    check('description').trim().escape().not().isEmpty().withMessage('Description cannot be empty'),
], async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { name, status , description } = req.body;
    let todoOb = new Todo({ name, status , description });
    let result = await todoOb.save();
    res.json(result);
};


exports.getTodos =  async function (req, res, next) {

    let results = await Todo.find();
    res.json(results);
}

exports.putTodos = [
    check('name').trim().escape().not().isEmpty().withMessage('Name cannot be empty'),
    check('status').isBoolean().withMessage('Status must be a boolean value'),
    check('description').trim().escape().not().isEmpty().withMessage('Description cannot be empty'),
], async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { name, status } = req.body;
    let todoOb = new Todo({ name, status });
    let result = await Todo.findByIdAndUpdate(req.params.id, { name, status });
    res.json(result);
}

exports.deleteTodos = async function (req, res, next) {

    let idDelete = req.params.id;
    let result = await Todo.findByIdAndDelete(idDelete);
    res.json(result);
}

exports.patchTodos = [
    check('name').trim().escape().not().isEmpty().withMessage('Name cannot be empty'),
    check('status').isBoolean().withMessage('Status must be a boolean value'),
    check('description').trim().escape().not().isEmpty().withMessage('Description cannot be empty'),
], async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { name, status } = req.body;
    let todoOb = new Todo({ name, status , description });
    let result = await Todo.findByIdAndUpdate(req.params.id, { name, status , description });
    res.json(result);
}