// this code is property of dotVector LLC (c) 2018

(function() {

	var bgArr = [{
		description: "Helicopter ride in Istanbul, Europe side",
		photographer: "PM",
		imgURL: "url(background-images/img0.jpg)"
	}, {
		description: "Helicopter ride over Istanbul",
		photographer: "PM",
		imgURL: "url(background-images/img1.jpg)"
	}, {
		description: "Somewhere over Southeastern US",
		photographer: "PM",
		imgURL: "url(background-images/img2.jpg)"
	}, {
		description: "Flying over Lake Superior",
		photographer: "PM",
		imgURL: "url(background-images/img3.jpg)"
	}, {
		description: "The expansive Los Angeles, CA",
		photographer: "PM",
		imgURL: "url(background-images/img4.jpg)"
	}, {
		description: "Takeoff from OPF over Miami, FL",
		photographer: "PM",
		imgURL: "url(background-images/img5.jpg)"
	}, {
		description: "Over Charlotte, NC",
		photographer: "PM",
		imgURL: "url(background-images/img6.jpg)"
	}, {
		description: "Somewhere over the midwest, headed to Boston, MA",
		photographer: "PM",
		imgURL: "url(background-images/img7.jpg)"
	}, {
		description: "Nice sunset flying into Dallas, TX",
		photographer: "PM",
		imgURL: "url(background-images/img8.jpg)"
	}, {
		description: "Some cool cloud formations flying to Cincinnati, OH",
		photographer: "PM",
		imgURL: "url(background-images/img9.jpg)"
	}, {
		description: "Heading into the sunrise flying to Scranton, PA",
		photographer: "PM",
		imgURL: "url(background-images/img10.jpg)"
	}, {
		description: "It looks cold flying into Albany, NY",
		photographer: "PM",
		imgURL: "url(background-images/img11.jpg)"
	}, {
		description: "Flying from Hanscom MA, to Baltimore, MD",
		photographer: "PM",
		imgURL: "url(background-images/img12.jpg)"
	}, {
		description: "Over the Smokey Mountains",
		photographer: "PM",
		imgURL: "url(background-images/img13.jpg)"
	}];
	
	var num = Math.floor(Math.random() * 14);
	$('body').css("background-image", bgArr[num].imgURL);
	$('#photo-credit').text("Description: " + bgArr[num].description + 
				".  Taken by: " + bgArr[num].photographer + ".");

// Time Math

	$('#calculate-time-btn').click(function() {

	// get the input fields
	var field1 = $('#time1').val().split(":");
	var field2 = $('#time2').val().split(":");
	var field3 = $('#time3').val().split(":");
	var field4 = $('#time4').val().split(":");

	// validate fields

	// check for over midnight

	//convert all times to minutes
	var outTimeMinutes = getMinutes(field1);
	var offTimeMinutes = getMinutes(field2);
	var onTimeMinutes = getMinutes(field3);
	var inTimeMinutes = getMinutes(field4);
	// do the math
	if (outTimeMinutes < inTimeMinutes) {
		// not over midnight
		var blockTimeMinutes = (inTimeMinutes - outTimeMinutes);
		var blockTimeTenths = (blockTimeMinutes)/60;
	} else {
		// over midnight, do math from midnight both ways

	}
	if (offTimeMinutes < onTimeMinutes) {
		// not over midnight
		var flightTimeMinutes = (onTimeMinutes - offTimeMinutes);
		var flightTimeTenths = parseFloat(flightTimeMinutes/60).toFixed(1);
	} else {
		// over midnight, do math from midnight both ways
		var minutesBefore = 1440 - offTimeMinutes;
		var flightTimeMinutes = minutesBefore + onTimeMinutes;
		var flightTimeTenths = parseFloat(flightTimeMinutes/60).toFixed(1);
	}
	if (outTimeMinutes < inTimeMinutes) {
		// not over midnight
		var blockTimeMinutes = (inTimeMinutes - outTimeMinutes);
		var blockTimeTenths = parseFloat(blockTimeMinutes/60).toFixed(1);
	} else {
		// over midnight, do math from midnight both ways
		minutesBefore = 1440 - outTimeMinutes;
		var blockTimeMinutes = minutesBefore + inTimeMinutes;
		var blockTimeTenths = parseFloat(blockTimeMinutes/60).toFixed(1);
	}
	//display results
		$('#flightTimeLabelMinutes').html(flightTimeMinutes);
		$('#flightTimeLabelTenths').html(flightTimeTenths);
		$('#blockTimeLabelMinutes').html(blockTimeMinutes);
		$('#blockTimeLabelTenths').html(blockTimeTenths);
});

function getMinutes(time) {
	var hourMinutes = ((parseInt(time[0])) * 60);
	return hourMinutes + parseInt(time[1]);
}


// Fuel Math

	$('#calculate-fuel-btn').click(function() {
	// get values (3)
	var currentFuelOnBoard = $('#FOB').val();
	var desiredFuelOnBoard = $('#desiredFuel').val();
	var fuelType = $('input[name=fuel-type-radio]:checked').val();
	// caluclate results
	if (fuelType === "Jet-A") {
		var fuelWeight = 6.7;
	} else {
		var fuelWeight = 6.02;
	}
	var fuelNeededPounds = (desiredFuelOnBoard - currentFuelOnBoard);
	var fuelNeededGallons = Math.round(fuelNeededPounds / fuelWeight);
	var fuelNeededPerSide = Math.round(fuelNeededGallons / 2);

	// display results
	$('#answerCurrentFuel').html(currentFuelOnBoard);
	$('#answerDesiredFuel').html(desiredFuelOnBoard);
	$('#answerFuelNeededPounds').html(fuelNeededPounds);
	$('#answerFuelNeededGallons').html(fuelNeededGallons);
	$('#answerFuelNeededPerSide').html(fuelNeededPerSide);
});
	



})();