
// assign random background image to page
// var imageInfos = [ImageInfo];

// var ImageInfo = {
// 	detail: "",
// 	photographer: ""
// }
	var imageDetail = [];
	var imagePhotographer = [];

function setBackground() {
	//get total number of images in folder - functionality to be added later, there are 10 files.
	//get random number 
	var imgNumber = Math.floor((Math.random() * 14) + 1); // get number from 1-14
	//create string of the image name
	var imgString = "background-images/img" + imgNumber + ".jpg";
	//set background image
	$('body').css("background-image", "url(" + imgString + ")");
	// affix credits to page
	console.log(imgNumber);
	$('#photo-credit').text('Details: ' + imageDetail[imgNumber] + '  Taken By: ' + imagePhotographer[imgNumber]);
}

init();

function init() {

	// for (var i = 1; i <= 15; i++) {
	// 	imageInfos[i] = new ImageInfo(i);
	// }

	// function ImageInfo(i) {
	// 	this.detail = "image #" + i + " taken somewhere.",
	// 	this.photographer = "Paul McNeme"
	// };

	imageDetail[1] = "helicopter ride in Istanbul, Europe side";
	imagePhotographer[1] = "PM";
	imageDetail[2] = "helicopter ride over Istanbul";
	imagePhotographer[2] = "PM";
	imageDetail[3] = "flying over Southeastern US, sunset";
	imagePhotographer[3] = "PM";
	imageDetail[4] = "over Lake Superior";
	imagePhotographer[4] = "PM";
	imageDetail[5] = "Los Angeles, CA";
	imagePhotographer[5] = "PM";
	imageDetail[6] = "takeoff over Miami, FL";
	imagePhotographer[6] = "PM";
	imageDetail[7] = "Enroute to Charlotte, NC";
	imagePhotographer[7] = "PM";
	imageDetail[8] = "over the midwest, headed to Boston, MA";
	imagePhotographer[8] = "PM";
 	imageDetail[9] = "quiet sunset flying into Dallas, TX";
 	imagePhotographer[9] = "PM";
	imageDetail[10] = "cool cloud formations flying to Cincinnati, OH";
	imagePhotographer[10] = "PM";
	imageDetail[11] = "sunrise flying to Scranton, PA";
	imagePhotographer[11] = "PM";
	imageDetail[12] = "it looks cold flying into Albany, NY";
	imagePhotographer[12] = "PM";
	imageDetail[13] = "Flying toward Baltimore, MD";
	imagePhotographer[13] = "PM";
	imageDetail[14] = "Over the Smokey Mountains";
	imagePhotographer[14] = "PM";

	setBackground();
}

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





