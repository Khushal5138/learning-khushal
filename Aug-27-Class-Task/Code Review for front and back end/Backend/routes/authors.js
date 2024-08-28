var express = require("express");
var router = express.Router();
const authorController = require("../controllers/authors");


router.post("/" ,  authorController.createAuthor);

router.get("/" , authorController.getAuthor);

router.delete("/:id" , authorController.deleteAuthor);

router.put("/:id" , authorController.putAuthor);

router.patch("/:id" , authorController.patchAuthor);

module.exports =  router;