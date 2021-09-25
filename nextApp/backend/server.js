const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors())
app.use(express.json())

const PORT = 4000 || process.env.PORT;

const pathsRoute = require('./Routes/paths');
const articleRoute = require('./Routes/article');
const allRoute = require('./Routes/all');

app.use('/', pathsRoute);
app.use('/',articleRoute);
app.use('/',allRoute);

app.listen(PORT, ()=>{
    console.log(`Server is listening on Port: ${PORT}`)
})