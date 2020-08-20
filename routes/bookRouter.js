const express = require('express')
const bookController =  require('../controllers/bookRouterController')

function BookRouter(book) {
   const bookRouter = express.Router()
   const controller =  bookController(book)
   // middleware
   bookRouter.use('/books/:bookId',controller.use)
  // define routes
   bookRouter.route('/books')
    .post(controller.post)
    .get(controller.get)

   bookRouter.route('/books/:bookId')
    .get(controller.singleGet)
    .put(controller.singlePut)
    .patch(controller.singlePatch)
    .delete(controller.singleDelete) 
    
    return bookRouter
}

module.exports =  BookRouter