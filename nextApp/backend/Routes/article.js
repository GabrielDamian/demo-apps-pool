const router = require('express').Router();
const articles_data = require('../data');

router.post('/article',(req,res)=>{
    let article_id = req.body.id || null;
    if(article_id == null)
    {
        res.status(400).send("Error!")
    }
    
    let custom_article_data;
    articles_data.forEach((el)=>{
        if(el.route == article_id)
        {
            custom_article_data = el
        }
    })
    return res.json(custom_article_data)
})

module.exports = router;