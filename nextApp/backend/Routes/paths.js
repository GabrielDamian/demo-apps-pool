const router = require('express').Router()
const articles_data = require('../data');

router.get('/paths', (req,res)=>{
    let only_articles = articles_data.map((el)=>{
        return el.route
    })
    return res.json(only_articles)
})

module.exports = router;