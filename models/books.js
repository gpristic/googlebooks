const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const books = new Schema({
    title: { type: String, required: true },
    author: {type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
})

const Book = mongoose.model('Book', books);

module.exports = Book;