// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
// =============================================================

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.post('/makeReservation', function(req, res) {
	console.log(JSON.stringify(req.body));

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
