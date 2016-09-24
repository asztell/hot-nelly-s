var customer = function(name, phone, email, ID) {
	this.customerName = name;
	this.phoneNumber = phone;
	this.customerEmail = email;
	this.customerID = ID;
}

module.exports = {
	customer: customer
};