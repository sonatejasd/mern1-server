const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
var getDB = require('../common/dbconnect');
var objectid = mongodb.ObjectId;

router.post('/register', async function(req, res, next){
    const data = req.body.data;
    console.log(data);
    try{
    const db = await getDB();
    const collection = db.collection("student");
    const result = await collection.insertOne(data);
    res.send(`Successfully inserted ${data.rno} with acknowledgement: ${res.acknowledged}`);
    }catch(err){
        res.send(err.message);
    }
});

router.get('/allStudents', async function(req, res, next){
    try{
    const db = await getDB();
    const collection = db.collection("student");
    const result = await collection.find().toArray();
    res.send(result);
    }catch(err){
        res.send(err.message);
    }

})

router.get('/:id', async function(req, res, next){
    try{
        const id = req.params.id;
        const db = await getDB();
        const collection = db.collection("student");
        const result = await collection.findOne({_id:objectid.createFromHexString(id)});
        res.send( result._id + " with name " + result.name + " and roll no " + result.rno);
    }catch(err){
        if(err.message === "Cannot read properties of null (reading '_id')"){
            res.send("No student found with given id");
        }
        else
        res.send(err.message);
    }
});
router.put('/:id', async function(req, res, next){
    try{
    const id = req.params.id;
    const data = req.body.data;
    var db = await getDB();
    var collection = db.collection("student");
    var result = await collection.updateOne({_id:objectid.createFromHexString(id)}, {$set:data});
    res.send(`Successfully updated student with id ${id} : ${result}`);
    }catch(err){
        res.send(err.message);
    }
});

router.delete('/:id', async function(req, res, next){
    try{
        const id = req.params.id;
        const db = await getDB();
        const collection = db.collection("student");
        const result = collection.deleteOne({_id:objectid.createFromHexString(id)});
        res.send(`Successfully deleted student with id ${id}`);
    } catch(err){
        res.send(err.message);
    }
});
module.exports = router;