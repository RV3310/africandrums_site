
$(document).ready(function() {

// variables
var ww = $(window).width();

	// Responsive Nav Bar

$(".fa").on("click", function() { 
	event.preventDefault(); 
	$("nav").toggle(); 
});

$(window).resize(function() { 
	if ($(window).width() < 850) { 
		$("nav").hide(); 
	} else { $("nav").show(); 
} 
})

// OVERLAY FUNCTIONS


// SHOW/HIDE FUNCTIONS

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

});

// DRUMS PAGE

// SLIDE ANIMATION




// ARTISTIS PAGE

// 3D CAROUSEL




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
