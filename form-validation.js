"use strict";

const flName = document.getElementById("flname");
const phoneNum = document.getElementById("phone");
const email = document.getElementById("email");
const textArea = document.getElementById("userServicesReq");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
	let messages = [];
	// check to see if name is blank or null
	if (flName.value === "" || flName.value == null) {
		messages.push("Name is required, please!");
	}
    // check to see if phoneNum is blank or null else check validity of phoneNum
	if (phoneNum.value === "" || phoneNum.value == null) {
		messages.push("Phone Number is required, please.");
	} else if (!validPhoneNumber(phoneNum.value)) { 
       messages.push("Please enter your phone number correctly!")
    } 
    // check to see if email is blank or null else check validity of email addr
	if (email.value === "" || email.value == null) {
		messages.push("Email is required and must be a valid email address, please.");
	} else if (!validEmail(form.email.value)) {
		messages.push("The entered email must be a valid email address, please!");
	}

	if (textArea.value === "" || textArea.value == null) {
		messages.push("A description is required, please!");
	}

	//check for error message
	if (messages.length > 0) {
		// prevent the page from submitting by default
		e.preventDefault();
		// join error messages with a nice comma and a space
		errorElement.innerText = messages.join(" ");
	}
});

// check valid email
function validEmail(email) {
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(String(email).trim().toLowerCase());
}

// check valid phone number
function validPhoneNumber(phoneNum) {
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phoneRegex.test(String(phoneNum).trim());
}