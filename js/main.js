// Initialize Firebase

//var firebaseURL = "https://www.gstatic.com/firebasejs/3.3.0/firebase.js";

//Step 1
var config = {
    apiKey: "AIzaSyC7ip5fD3CO4d1JoF9spK_UQTzNubEkfqc",
    authDomain: "final-project-ffe96.firebaseapp.com",
    databaseURL: "https://final-project-ffe96.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "498770179925"
  };

  firebase.initializeApp(config);


//Connect to Database
var database = firebase.database();


//Step 2
var reservationData = {};



//Step 3
$('.reservation-day li').on('click', function () {
	
	//var day = $(this).val();

	reservationData.day = $(this).text();

	//alert($(this).text());

});



//Step 4

$('.reservations').on('submit', function (e) {
	e.preventDefault();

	//grab user's comment from input
	//var name = $('.reservation-name').val();

	//clear users input
	//$('.reservation-name').val('');

	//add input to reservationData object
	//reservationData.name = $('.reservation-name').text();
	reservationData.name = $('.reservation-name').val();

	//alert(name);


//Step 5

	//section for reservationData (U9L4S35)
	var reservationDataReference = database.ref('reservationsMade');

	//use set method to save data to the reservationsMade
	reservationDataReference.push(reservationData);

	//reservationDataReference.push({
	//	comment: day,
	//	comment: name
});


//Step 6
function getReservations () {

	//use reference to database to listen for changes in reservation data
	database.ref('reservationsMade').on('value', function (results) {

		//get all reservations stored in the results we received back from Firebase
		var allReservations = results.val();

		//remove all list reservations from DOM before appending list reservations
		$('reservationsMade').empty();

	});

	//iterate through all reservations coming from db
	for (var reservation in allReservations) {

		//Create an object literal with the data we'll pass to Handlebars
		var context = {
			name: allReservations[reservation].name,
			day: allReservations[reservation].day,
		};

	var source = $("#reservation-template").html();
	var template = Handlebars.compile(source);
	var reservationListItem = template(context);
	$('.reservations').append(reservationListItem);
	}

}

//Step 7

      function initMap() {
        //var uluru = {lat: 40.8054491, lng: -73.9654415};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.8054491, lng: -73.9654415};
          zoom: 10,
          scrollwheel: false,
        });

        var marker = new google.maps.Marker({
          position: {lat: 40.8054491, lng: -73.9654415};,
          map: map,
          title: 'Monks Café'
        });
      }















