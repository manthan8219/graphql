import mongoose from 'mongoose'
const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const Author = mongoose.model("Author", AuthorSchema);

export default Author;