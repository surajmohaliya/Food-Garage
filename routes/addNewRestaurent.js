var express = require('express');
var router = express.Router();

var mongoClient = require("mongodb").MongoClient;
var dbUrl = 'mongodb://localhost:27017';


/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {};
    mongoClient.connect(dbUrl, (error, client) => {
        var db = client.db("FoodGarage");
        var collection = db.collection("restaurentDetails");
        collection.insertOne(req.query, (error) => {
            if (error) {
                data.msg = 'Error';
            } else {
                data.msg = 'Success';
            }
            res.send(JSON.stringify(data));
        })
    });    
});

module.exports = router;
