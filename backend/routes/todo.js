let express = require('express')
let router = express.Router()
let mongo = require('mongodb')
let dbClient = mongo.MongoClient
let dbUrl = "mongodb://127.0.0.1:27017"
let dbName = "Todo"

dbClient.connect(dbUrl,(err,connection)=>{
    if(err){
        console.log("Cannot connect to database...");
    }
    else{
        console.log("Database connected...");
        dbConnection = connection.db(dbName)
    }
})

router.get('/display',(req,res)=>{
    console.log("Display API getting hit...");
    dbConnection.collection('tasks').find({}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch tasks...");
        }
        else{
            res.send(data)
        }
    })
})

module.exports = router