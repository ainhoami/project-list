const router = require("express").Router()
const db= require("../db")

router.get("/parents", (req, res, next) => {
  const sql =
  `
  SELECT id, name FROM categories where parent_id is NULL
  `

  db.query(sql, (err,results,fields)=>{
    res.json(results)
  })
})



router.get("/categories", (req, res, next)=>{
  const sql = `
  SELECT id, name, parent_id, slug FROM categories where parent_id is not NULL
  `

  db.query(sql, (err,results,fields)=>{
    res.json(results)
  })
})
  router.get("/posts", (req, res, next)=>{
    const sql=`
    SELECT id, title, picurl, category_id, date, description FROM posts`

    db.query(sql, (err,results,fields)=>{
      res.json(results)
    })
  
  })


  router.post("/createpost", (req, res, next)=>{
    console.log(req.body + " req.body")
    const title=req.body.title
    const sql=`
    INSERT INTO POSTS (title, picurl, category_id, date, description ) VALUES (?,?,?,?,?)`

    db.query(sql, [title, req.body.picurl,req.body.category_id,req.body.date,req.body.description] ,(err,results,fields)=>{
      res.json(results)
    })
    console.log(req.body + " req.body")

  })

module.exports = router
