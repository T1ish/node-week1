const Contact = require("./Contact.js");

class ContactList {
	constructor(){
		this.list = [];
	}

	addContact(contact){
		if(contact instanceof Contact){
			this.list.push(contact);
		}
	}
};

module.exports = ContactList;