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

router.get('/displayone/:sno',(req,res)=>{
    dbConnection.collection('tasks').find({sno:parseInt(req.params.sno)}).toArray((err,data)=>{
        if(err){
            console.log("Cannot fetch one task...");
        }
        else{
            res.send(data[0])
            console.log("Fetching one task...");
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
                let {_id,...rest}=req.body
                dbConnection.collection('tasks').updateOne({sno:req.body.sno},{$set:{...rest}})
                res.send("Editted task...")
            }
            else{
                console.log("Cannot edit...");
            }
        }
    })
})

router.post('/delete',(req,res)=>{
    console.log("Delete task API getting hit...");
    dbConnection.collection('tasks').find({sno:req.body.sno}).toArray((err,data)=>{
        if(err){
            console.log("Cannot delete task...");
        }
        else{
            dbConnection.collection('tasks').deleteOne({sno:req.body.sno})
            res.send("Task deleted...")
        }
    })
})

module.exports = router