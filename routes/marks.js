const express = require('express');
const router = express.Router();

router.post('/save/:name/:total', function (req, res, next) {
    const { name, total } = req.params;
    res.send(`${name}'s total marks = ${total}`);
});

router.get('/getTotal',function(req, res, next){
    const { name, total } = req.query;
    res.send(`${name}'s total marks = ${total}`);
});

router.put('/updateTotal',function(req, res, next){
    const { name, total } = req.headers;
    res.send(`${name}'s total marks = ${total}`);
});

router.patch('/updateTotal',function(req, res, next){
    const { name, total } = req.body;
    res.send(`${name}'s total marks is ${total}`)
});

router.delete('/deleteMarks/:rollNo',function(req, res, next){
    const rollNo = req.params.rollNo;
    res.send(`total marks for rollNo: ${rollNo} deleted`)
});



module.exports = router;