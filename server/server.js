
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// var User = require('../models/user.js');
var cors = require('cors')
var fs = require('fs');


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var list = fs.readFileSync('./data.json', 'utf8');

var obj = JSON.parse(list);

// console.log(typeof obj);
router.use(function(req, res, next){
    next();
});

router.get('/getlist', function(req, res){
    res.json(obj);
});




app.use('/api', router);
app.listen(port);
console.log('backend listening on post ' + port);