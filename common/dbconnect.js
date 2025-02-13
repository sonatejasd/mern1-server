var mongodb = require('mongodb');
async function getDB() {
    const mongoClient = mongodb.MongoClient;
    const server = await mongoClient.connect("mongodb+srv://sona:sona@cluster0.rvvfo.mongodb.net/");
    const db = server.db("studentmanagement");
    return db;
}

module.exports = getDB;
