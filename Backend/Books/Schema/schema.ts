import mongoose from 'mongoose'
const BooksSchema = new mongoose.Schema({
    title:{
        type:String
    },
    AuthorId:{
        type:mongoose.Schema.Types.ObjectId
    },
    summary:{
        type:String
    },
    publishDate:{
        type:String
    }
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;