var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var dburl = 'mongodb://localhost:27017';
const bcrypt = require('bcrypt');


router.post('/', (request, response) => {
    var data = {};
    mongoClient.connect(dburl, (error, client) => { // connecting to db server
        if (error) {
             data.msg = "Error while connecting to db server";
        }
        var db = client.db("FoodGarage"); // connecting to specific db under server
        var collection = db.collection("userLoginDetails");
        collection.find({
            userAccountId: request.body.userAccountId
        }).toArray((error, details) => {
            if (error) {
                data.msg = 'Error while conncting to collection';
            } else {
                console.log(details);
                bcrypt.compare(request.body.accountPwd, details[0].accountPwd, function(err, result) {
                    if (result) { // true
                        request.session.isUserLoggedin = true;
                        data.msg = 'Valid User'
                        data.status = 'Success';
                    } else {
                        request.session.isUserLoggedin = false;
                        data.msg = 'Invalid Credentials'
                        data.status = 'Error';
                    }
                    response.send(JSON.stringify(data));
                });                
            }
        })
    });


    
    
});


module.exports = router;