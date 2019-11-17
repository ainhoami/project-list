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

  router.get("/posts", (req, res, next)=>{
    const sql=`
    SELECT id, title, picurl, category_id, date, description FROM posts`

    db.query(sql, (err,results,fields)=>{
      res.json(results)
    })
  
  })
})
module.exports = router
