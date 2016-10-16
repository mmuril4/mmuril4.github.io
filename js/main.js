// Initialize Firebase

var firebaseURL = "https://www.gstatic.com/firebasejs/3.3.0/firebase.js";
//Step 1
  var config = {
    apiKey: "AIzaSyAf82fQwO7oErwFf_jZYRP3dhQO0Q0VhU8",
    authDomain: "reservation-site-62a8f.firebaseapp.com",
    databaseURL: "https://reservation-site-62a8f.firebaseio.com",
    storageBucket: "reservation-site-62a8f.appspot.com",
    messagingSenderId: "732766382169"
  };
  firebase.initializeApp(config);


//Connect to Database
var database = firebase.database();




//Step 2
var reservationData = {};



//Step 3
$('.reservation-day li').on('click', function () {
	
	var day = $(this).val();

	reservationData.day = $(this).text();

	alert($(this).text());

});



//Step 4

$('form').on('submit', function (e) {
	e.preventDefault();

	//grab user's comment from input
	var name = $('.reservation-name').val();

	//clear users input
	$('.reservation-name').val('');

	//add input to reservationData object
	reservationData.name = $(this).text();

	//alert(name);


//Step 5

	//section for reservationData (U9L4S35)
	var reservationDataReference = database.ref('reservationsMade');

	//use set method to save data to the reservationsMade
	reservationDataReference.push({
		comment: day,
		comment: name
	});


//Step 6
function getReservations () {

}

});













































