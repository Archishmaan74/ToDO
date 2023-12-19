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

router.post('/add',(req,res)=>{
    console.log("Add task API getting hit...");
    dbConnection.collection('tasks').find({sno:req.body.sno}).toArray((err,data)=>{
        if(err){
            console.log("Cannot add task...");
        }
        else{
            dbConnection.collection('tasks').insertOne({
                ...req.body
            })
            res.send("Task inserted...")
        }
    })
})

router.post('/edit',(req,res)=>{
    console.log("Edit API getting hit...");
    dbConnection.collection('tasks').find({sno:req.body.sno}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch tasks to edit...");
        }
        else{
            if(data.length > 0){
                dbConnection.collection('tasks').updateOne({sno:req.body.sno},{$set:{...req.body}})
                res.send("Editted task...")
            }
            else{
                console.log("Cannot edit...");
            }
        }
    })
})

module.exports = router