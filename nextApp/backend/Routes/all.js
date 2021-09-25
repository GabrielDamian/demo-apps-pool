const router = require('express').Router();
const articles_data = require('../data');

router.get('/all',(req,res)=>{
    
    res.json(articles_data);
})

module.exports = router;