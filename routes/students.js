const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

router.post('/register', async function(req, res, next){
    const data = req.body.data;
    console.log(data);
    //create mongodb client
    const mongoClient = mongodb.MongoClient;
    //connect mongo client  to mongo server
    try{
    const server = await mongoClient.connect("mongodb+srv://sona:sona@cluster0.rvvfo.mongodb.net/");
    const db = server.db("studentmanagement");
    const collection = db.collection("student");
    const result = await collection.insertOne(data);
    res.send(`Successfully inserted ${data.rno}`);
    }catch(err){
        res.send(err.message);
    }
});

// router.get('/student/:rno', async function(req, res, next){
//     const rno = req.params.rno;
//     const mongoClient = mongodb.MongoClient;
//     try{
//     const server = await  mongoClient.connect("mongodb+srv://sona:sona@cluster0.rvvfo.mongodb.net/");
//     const db = server.db("studentmanagement");
//     const collection = db.collection("student");
//     const result = await collection.findOne(rno);
//     res.send(`result`);
//     }catch(err){
//         res.send(err.message);
//     }

// })

module.exports = router;