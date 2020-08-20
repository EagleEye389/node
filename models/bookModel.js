const moongose = require('mongoose')
const { Schema }  = moongose

const bookModel =  new Schema({
  title : {type: String},
  isbn :{type: String},
  pageCount: {type: Number},
  publishedDate: { type: Object},
  thumbnailUrl: {type: String},
  shortDescription: {type: String},
  status: {type: String},
  authors: {type: Array},
  categories:  {type: Array}
})
module.exports =  moongose.model("book",bookModel)