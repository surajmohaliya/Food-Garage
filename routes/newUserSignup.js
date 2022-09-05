var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var dburl = 'mongodb://localhost:27017';

const bcrypt = require('bcrypt');
const saltRounds = 10;

const myPlaintextPassword = 'China';



/* GET home page. */
router.post('/', function(req, res, next) {
    var data = {};
    mongoClient.connect(dburl, (error, client) => {
        var db = client.db("FoodGarage");
        var collection = db.collection("userLoginDetails");

        bcrypt.hash(req.body.accountPwd, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            console.log("hash");
            console.log(hash);
            req.body.accountPwd = hash;
            collection.insertOne(req.body, (error) => {
                if (error) {
                    data.msg = 'Error while inserting data';
                    data.status = 'Failed';
                } else {
                    data.msg = "Successfly user got registered";
                    data.status = 'Success';
                }
               res.send(JSON.stringify(data));
            });
        });
        

        
    });
});

module.exports = router;
