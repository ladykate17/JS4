// JavaScript Document

// var victim = {{
// 	name   : ,
// 	phone  : ,
// 	street : ,
// }

// var volunteers =



// -------------------------- //
// ---- START VICTIMS ---- //

var allVictimNames   = [];
var allVictimPhones  = [];
var allVictimStreets = [];

var getInfoVictims = function() {

	var victimName   = allVictimNames.push(prompt("Victim Number " + counter + ": Enter the victim's name:"));
	var victimPhone  = allVictimPhones.push(prompt("Victim Number " + counter + ": Enter the victim's phone:"));
	var victimStreet = allVictimStreets.push(prompt("Victim Number " + counter + ": Enter the victim's street:"));

	// console.log("victimName: " + victimName);
	// console.log("victimPhone: " + victimPhone);
	// console.log("victimStreet: " + victimStreet);

}


// Get number of victims from use 
var victimQuantity = prompt("How many disaster VICTIMS do you wish to enter?");
console.log("user entered victim qty: " + victimQuantity);


// Loop the entered quantity of victims 
for (var counter = 1; counter <= victimQuantity; counter++) {
	
	getInfoVictims(); // ask Questions
}


console.log("All Victims Names: " + allVictimNames);
console.log("All Victims Phones: " + allVictimPhones);
console.log("All Victims Streets: " + allVictimStreets);

// ---- END VICTIMS ---- //
// --------------------- //


// -------------------------- //
// ---- START VOLUNTEERS ---- //

var allVolunteerNames   = [];
var allVolunteerPhones  = [];
var allVolunteerStreets = [];

var getInfoVolunteer = function() {

	var volunteerName   = allVolunteerNames.push(prompt("Volunteer Number " + counter2 + ": Enter the volunteer's name:"));
	var volunteerPhone  = allVolunteerPhones.push(prompt("Volunteer Number " + counter2 + ": Enter the volunteer's phone:"));
	var volunteerStreet = allVolunteerStreets.push(prompt("Volunteer Number " + counter2 + ": Enter the volunteer's street:"));

	// console.log("volunteerName: " + volunteerName);
	// console.log("volunteerPhone: " + volunteerPhone);
	// console.log("volunteerStreet: " + volunteerStreet);

}


// Get number of victims from use 
var volunteerQuantity = prompt("How many disaster VOLUNTEERS do you wish to enter?");
console.log("user entered volunteer qty: " + volunteerQuantity);


// Loop the entered quantity of victims 
for (var counter2 = 1; counter2 <= volunteerQuantity; counter2++) {
	
	getInfoVolunteer(); // ask Questions
}


console.log("All Volunteer Names: " + allVolunteerNames);
console.log("All Volunteer Phones: " + allVolunteerPhones);
console.log("All Volunteer Streets: " + allVolunteerStreets);


// ---- END VOLUNTEERS ---- //
// ------------------------ //

alert(
	"Number of People in Need: " + victimQuantity +
	"\nNumber of Volunteers: " + volunteerQuantity +
	"\n\nAll Volunteer Names: " + allVolunteerNames +
	"\nAll Volunteer Phones: " + allVolunteerPhones +
	"\nAll Volunteer Streets: " + allVolunteerStreets +
	"\n\nAll People in Need Names: " + allVictimNames +
	"\nAll People in Need Phones: " + allVictimPhones +
	"\nAll People in Need Streets: " + allVictimStreets
)


// ---- CONFIRM ---- //
// ----------------- //

var getInfoVolunteerConfirm = function() {

	var volunteerName   = allVolunteerNames.push(prompt("Enter the volunteer's name:"));
	var volunteerPhone  = allVolunteerPhones.push(prompt("Enter the volunteer's phone:"));
	var volunteerStreet = allVolunteerStreets.push(prompt("Enter the volunteer's street:"));
	var confirmButton = confirm('Do you want to enter another Volunteer?');
	
	if (confirmButton === true) {
		getInfoVolunteerConfirm();
	}
	else {
		alert('Thank you.')
	}
}


for (var i = 0; i <= 0 ; i++) {
	getInfoVolunteerConfirm();
}



