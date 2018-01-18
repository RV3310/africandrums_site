// LANDING PAGE 

$(document).ready(function() {

// variables
var ww = $(window).width();

// learnMore function
function learnMore() {
	event.preventDefault();
	$(".first").hide();
	$(".second").show();
}


function goBack() {
	event.preventDefault();
	$(".first").show();
	$(".second").hide();

}

$(".goforward").click(learnMore);
$(".goback").click(goBack);

// nav dropdown on hover

$(".links").hover(navDrop);

function navDrop() {
	event.preventDefault();
	if (ww<500); 
		$(this).parents().siblings("p").show();
}

});

// target - learn more
// when clicked hide intro first and show intro second






// function playAudio() {
//      var x = $("#d_drm")[0];
//      x.play();
// }

// // When box is clicked on add "is_active" class

// //check which boxes are active

// //get bpm

// //play every 60s/bpm 



// // CONTROLS

// // slider

// var slider = document.getElementById("bpm");
// var output = document.getElementById("bpm_v");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
