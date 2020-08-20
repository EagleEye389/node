function bookRouterController(book) {
  
  function post(req, res){
    const newBook = new book(req.body)
    newBook.save()
    return res.status(200).json(newBook)
  }

  function get(req, res){
  const query = {}
  if(req.query.title){
    query.title = req.query.title
    }
    book.find(query,(err,book) => {
      if(err){
        return  res.json(err)
      } else {
        return  res.json({ length: book.length, book })
      }
    })
   }

   function use(req, res,next){
    book.findById(req.params.bookId, (err, bo) => {
       if(err) {
         return res.status(404).json(err)
       } else {
          req.book =  bo
          next()
       }
    })
  }

  function singleGet(req, res){
    const { book } = req
    return res.json(book)
  }

  function singlePut(req, res){
    const { book, body } = req
    
    Object.entries(body).forEach(item => {
      const key = item[0]
      console.log(key)
      book[key] =  body[key]
    })
    
    book.save((err ,obj) => {
      if(err){
        return res.status(500).json({"error": "Something went wrong"})
      } else {
        res.status(200).json(obj)
      }
    })
  }
  function singlePatch(req,res){
    const { book, body } = req
    Object.entries(body).forEach(item => {
      const key = item[0]
      book[key] =  body[key]
    })
    book.save((err ,obj) => {
      if(err){
        return res.status(501).json(err)
      } else {
        res.status(200).json(obj)
      }
    })
   }

   function singleDelete(req, res) {
      req.book.remove((err)=>{
        if(err){
          return res.sendStatus(500).send(err)
        }
        return res.sendStatus(204)
      })
   }



   return { get, post, use, singleGet, singlePut, singlePatch, singleDelete}

}
module.exports = bookRouterController