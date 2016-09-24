var customer = require('./customer');

// Reservations Info (DATA)
// =============================================================

var reservations = [
	{
		customerName: 'Jack',
		phoneNumber: '555-5555',
		customerEmail: 'jack@email.com',
		customerID: '1'
	},
	{
		customerName: 'Joe',
		phoneNumber: '444-4444',
		customerEmail: 'joe@email.com',
		customerID: '2'
	},
	{
		customerName: 'John',
		phoneNumber: '333-3333',
		customerEmail: 'john@email.com',
		customerID: '3'
	}
];

var makeReservation = function(name, phone, email) {
	var ID = reservations.length.toString();
	var customer = new customer(name, phone, email, ID);
	reservations.push(customer);
}

module.exports = {
	reservations: reservations,
	makeReservation : makeReservation
};