const express = require('express')
const PORT = 4000;
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express();
app.use(cors())
dotenv.config();
let connect_to_mongoose = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_KEY)
        console.log("Connected to DB!")
    }
    catch(err)
    {
        console.log(err)
    }
}
connect_to_mongoose();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(PORT, ()=>{
    console.log(`App is listening on port: ${PORT}`)
})