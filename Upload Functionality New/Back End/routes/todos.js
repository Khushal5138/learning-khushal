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
const todoController = require("../controllers/todos");

router.post("/", todoController.postTodos);

router.get("/", todoController.getTodos);

router.delete("/:id", todoController.deleteTodos);

router.put("/:id", todoController.putTodos);

router.patch("/:id", todoController.patchTodos);

module.exports = router;
