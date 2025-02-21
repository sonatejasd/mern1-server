var jwt = require('jsonwebtoken');

function validateToken(req,res,next) {
    var token = req.headers.authorization;
    if(token){
    jwt.verify(token, "token", function(err){
        if(err) {
            res.send({...err, "error reason" : "Invalid token"});
        }else
         next();
    })
}else{
    res.send("token missing")
}
};

module.exports = validateToken;