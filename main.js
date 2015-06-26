// JavaScript Document



// -------------------------- //
// ---- START VICTIMS ---- //

// var allVictimNames   = [];
// var allVictimPhones  = [];
// var allVictimStreets = [];

// var getInfoVictims = function() {

// 	allVictimNames.push(prompt("Victim Number " + counter + ": Enter the victim's name:"));
// 	allVictimPhones.push(prompt("Victim Number " + counter + ": Enter the victim's phone:"));
// 	allVictimStreets.push(prompt("Victim Number " + counter + ": Enter the victim's street:"));

// 	// console.log("victimName: " + victimName);
// 	// console.log("victimPhone: " + victimPhone);
// 	// console.log("victimStreet: " + victimStreet);

// }


// // Get number of victims from use 
// var victimQuantity = prompt("How many disaster VICTIMS do you wish to enter?");
// console.log("user entered victim qty: " + victimQuantity);


// // Loop the entered quantity of victims 
// for (var counter = 1; counter <= victimQuantity; counter++) {
	
// 	getInfoVictims(); // ask Questions
// }


// console.log("All Victims Names: " + allVictimNames);
// console.log("All Victims Phones: " + allVictimPhones);
// console.log("All Victims Streets: " + allVictimStreets);

// // ---- END VICTIMS ---- //
// // --------------------- //


// // -------------------------- //
// // ---- START VOLUNTEERS ---- //

// var allVolunteerNames   = [];
// var allVolunteerPhones  = [];
// var allVolunteerStreets = [];

// var getInfoVolunteer = function() {

// 	allVolunteerNames.push(prompt("Volunteer Number " + counter2 + ": Enter the volunteer's name:"));
// 	allVolunteerPhones.push(prompt("Volunteer Number " + counter2 + ": Enter the volunteer's phone:"));
// 	allVolunteerStreets.push(prompt("Volunteer Number " + counter2 + ": Enter the volunteer's street:"));

// 	// console.log("volunteerName: " + volunteerName);
// 	// console.log("volunteerPhone: " + volunteerPhone);
// 	// console.log("volunteerStreet: " + volunteerStreet);

// }


// // Get number of victims from use 
// var volunteerQuantity = prompt("How many disaster VOLUNTEERS do you wish to enter?");
// console.log("user entered volunteer qty: " + volunteerQuantity);


// // Loop the entered quantity of victims 
// for (var counter2 = 1; counter2 <= volunteerQuantity; counter2++) {
	
// 	getInfoVolunteer(); // ask Questions
// }


// console.log("All Volunteer Names: " + allVolunteerNames);
// console.log("All Volunteer Phones: " + allVolunteerPhones);
// console.log("All Volunteer Streets: " + allVolunteerStreets);


// // ---- END VOLUNTEERS ---- //
// // ------------------------ //

// alert(
// 	"Number of People in Need: " + victimQuantity +
// 	"\nNumber of Volunteers: " + volunteerQuantity +
// 	"\n\nAll Volunteer Names: " + allVolunteerNames +
// 	"\nAll Volunteer Phones: " + allVolunteerPhones +
// 	"\nAll Volunteer Streets: " + allVolunteerStreets +
// 	"\n\nAll People in Need Names: " + allVictimNames +
// 	"\nAll People in Need Phones: " + allVictimPhones +
// 	"\nAll People in Need Streets: " + allVictimStreets
// )


// ---- CONFIRM ---- //
// ----------------- //

var volunteers = [];

// var getInfoVolunteerConfirm = function() 

do {

	var volunteer = {

	name: prompt("Enter the volunteer's name:"),
	phone: prompt("Enter the volunteer's phone:"),
	street: prompt("Enter the volunteer's street:"),

	};

	volunteers.push(volunteer); // push the prompted volunteer(individual) to the Volunteers array 

	var confirmButton = confirm('Do you want to enter another Volunteer?');

	// // Reocursive Function, okay to use seldomly in some case, but best to use while
	// if (confirmButton === true) { 
	// 	getInfoVolunteerConfirm();
	// }
	// else {
	// 	alert('Thank you.')
	// }

} while (confirmButton === true)

// getInfoVolunteerConfirm();


// // Counter for Recursive function - careful these can easily get caught in an infinate loop
// for (var i = 0; i <= 0 ; i++) {
// 	getInfoVolunteerConfirm();
// }

// 	console.log(volunteers);


