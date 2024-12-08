// var express = require("express");
// var router = express.Router();
// const Todo = require("../models/todos");


// router.post("/" , async function (req , res , next) {

//     let { name , status } = req.body;
//     let todoOb = new Todo({ name , status });
//     let result = await todoOb.save();
//     res.json(result);
// });

// router.get("/" , async function (req , res , next) {

//     let results  = await Todo.find();
//     res.json(results);
// });

// router.delete("/:id" , async function ( req , res , next ) {

//     let idDelete = req.params.id;
//     let result = await Todo.findByIdAndDelete(idDelete);
//     res.json(result);

// });

// router.put("/:id" , async function ( req , res , next ) {

//     let { name , status } = req.body;
//     let todoOb =  new Todo({ name , status });
//     let result = await Todo.findByIdAndUpdate(req.params.id , { name , status });
//     res.json(result);
// });

// module.exports =  router;


var express = require("express");
var router = express.Router();
const Todo = require("../models/todos");
const { check, validationResult } = require("express-validator");

router.post("/", [
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
});

router.get("/", async function (req, res, next) {
    let results = await Todo.find();
    res.json(results);
});

router.delete("/:id", async function (req, res, next) {
    let idDelete = req.params.id;
    let result = await Todo.findByIdAndDelete(idDelete);
    res.json(result);
});

router.put("/:id", [
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
});

router.patch("/:id", [
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
});

module.exports = router;
