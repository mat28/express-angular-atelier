require('./db/db.js');
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var routes = require('./routes');

app.set('port',3000);

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/api',routes);


var server = app.listen(app.get("port"),function(){
  console.log(server.address().address);
});
