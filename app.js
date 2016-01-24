// Copyright 2015, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');
var Firebase = require("firebase");
var runmodoRef = new Firebase("https://runmodo.firebaseio.com/");


var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


// [START hello_world]
// Say hello!
app.get('/', function(req, res) {
  res.status(200).send('Hello, my world!');
});
// [END hello_world]

app.get('/people', function(req, res) {
  runmodoRef.child("people").on("value", function(snapshot) {
	  res.render('index', { title: 'Hey', message: 'Hello there!', data: snapshot.val() });
	});
});

// [START server]
// Start the server
var server = app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
// [END server]
