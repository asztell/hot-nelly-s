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

// Reservations Info (DATA)
// =============================================================

var customer = [{
	routeName: '',
	customerName: '',
	phoneNumber: '',
	customerEmail: '',
	customerID: ''
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	// res.send('Welcome to the Star Wars Page!')
	res.sendFile(path.join(__dirname, 'view.html'));
});
