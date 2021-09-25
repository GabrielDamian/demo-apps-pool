const express = require('express');
const axios = require('axios');
const cors = require('cors')
const PORT = 4000;
const redis = require('redis');
const RedisClient = redis.createClient();
const DEFAULT_EXPIRATION = 10

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(cors())

let crypto_key = 'd0dec057883cbc7ff887ecb5e5248b9679265101';


//basic example without separated function logic
app.get('/btc-price',async (req,res)=>{
    let time_snap_now = new Date().getTime();
    console.log("time_1", time_snap_now)
    
    RedisClient.get('price',async (error,price)=>{
        if(error) 
        {
            console.log(error);
            return res.status(500).send("error")
        }
        if(price != null)
        {
            //avem un chache pentru photos valid
            let time_snap_two = new Date().getTime();
            console.log("time 2", time_snap_two)

            console.log("cache hit")
            
            let time_lapsed = time_snap_two - time_snap_now;
            let resp_obj = {
                price: JSON.parse(price),
                time: time_lapsed,
                source: 'chache'
            }
            return res.json(resp_obj)
        }
        else
        {
            const {data} = await axios.get(
                `https://api.nomics.com/v1/prices?key=${crypto_key}`
            )
            let btc_obj;
            console.log(data);
            data.forEach((el)=>{
                if(el.currency == 'BBTC')
                {
                    btc_obj = el;
                }
            })
            
            RedisClient.setex('price',DEFAULT_EXPIRATION,JSON.stringify(btc_obj))
            console.log("CACHE MISS")
            let time_snap_three = new Date().getTime();

            let resp_obj={
                price: btc_obj,
                source: 'not-chache',
                time: time_snap_three-time_snap_now
            }
            return res.json(resp_obj);
        }
    })
   
})

// app.get('/photos',async (req,res)=>{
//     let albumID = 1; //from the req.body
//     let photos = await getORsetCache('photos',async ()=>{
//         const {data} = await axios.get(
//             "https://jsonplaceholder.typicode.com/photos",
//             {
//                 params: {albumID}
//             }
            
//         )
//         return data;
//     })

//     res.json(photos);
// })


// function getORsetCache(key,  cb){
//     return new Promise((resolve, reject)=>{
//         RedisClient.get(key, async(error, data)=>{
//             if(error) console.log(error)
//             if(data != null) {
//                 console.log("CHACHE HIT")
//                 return resolve(JSON.parse(data))
//             }
//             console.log("CHACHE MISS")
//             const freshData = await cb();
//             RedisClient.setex(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
//             resolve(freshData);
//         })
//     })
// }


app.listen(PORT, ()=>{
    console.log("server is litening of port: ", PORT);
})
