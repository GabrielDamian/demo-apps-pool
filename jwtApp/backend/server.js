const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000;
const jwt = require('jsonwebtoken');

const userData ={
    name: 'damian',
    pass: '123'
}

app.get('/',(req,res)=>{
    res.send("Server is working!")
})



app.post('/api/login',(req,res)=>{
    console.log(req.body);

    if(req.body.name == userData.name && req.body.pass == userData.pass)
    {
        console.log("cas 1")
        //resp with token
        jwt.sign({userData}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
            return res.json({
              token
            });
          });
    }
    else 
    {
        console.log("case 2")
        return res.status(400).send("User not found!")
    }
})

app.post('/api/private',(req,res)=>{
    jwt.verify(req.body.headers.token,'secretkey',(err,data)=>{
        if(err)
        {
            return res.json({
                allow: false
            })
        }
        else 
        {
            return res.json({
                allow: true
            })
        }
        
    })
})
app.listen(PORT,()=>{
    console.log(`Server is listening on port:${PORT}`)
})
