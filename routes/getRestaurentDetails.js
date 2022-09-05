var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var dburl = 'mongodb://localhost:27017';

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("req.session.isUserLoggedin")
    console.log(req.session.isUserLoggedin)
    console.log(req.body);
    var userSearchText = req.body.searchText ? req.body.searchText : '';

    var restaurentDetails = {
        details:  []
    }
    mongoClient.connect(dburl, (error, client) => {
        var db = client.db("FoodGarage");
        var collection = db.collection("restaurentDetails");
        var searchPattern;
        if (userSearchText == '') {
            searchPattern = {};
        } else { 
            searchPattern = {name: {$regex: new RegExp(userSearchText, 'gi')}} // 
            
        }
        collection.find(searchPattern).toArray((error, restData) => {
            restaurentDetails.details = restData;
            res.send(JSON.stringify(restaurentDetails));
        })
    })
});

module.exports = router;
