// const Book = require("../models/books");
// exports.createBook = function(req, res, next){
//     let title = req.body.title;
//     let author = req.body.author;
//     let summary = req.body.summary;
//     let isbn = req.body.isbn;
//     let category = req.body.category;
//     var bookOb = new Book({
//         title, author, summary, isbn, category,
//     });

//     bookOb.save(function(err){
//         if(err){
//             res.send("unable to create author");
//         }
//         else{
//             res.json("Book created");
//         }
//     });
// };

// exports.getBooksWithAuthors = async function(req, res){
//    await Book.find()
//     .populate("author").populate("category")
//     .exec(function(err, books_list){
//         if(err){
//             res.json({status: "error"});
//         }
//         else{
//             res.json(books_list);
//         }
//     });
// };

const Book = require("../models/books");

exports.createBook = async function(req, res, next) {
    try {
        const { title, author, summary, isbn, category } = req.body;
        const bookOb = new Book({
            title, author, summary, isbn, category,
        });

        await bookOb.save();
        res.json("Book created");
    } catch (err) {
        res.status(500).send("Unable to create book");
    }
};

exports.getBooksWithAuthors = async function(req, res) {
    try {
        const books_list = await Book.find()
            .populate("author")
            .populate("category")
            .exec();

        res.json(books_list);
    } catch (err) {
        res.status(500).json({ status: "error" });
    }
};
