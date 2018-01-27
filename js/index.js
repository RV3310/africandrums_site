
$(document).ready(function() {

// variables
var ww = $(window).width();

	// Responsive Nav Bar

// $(".fa").on("click", function() { 
// 	event.preventDefault(); 
// 	$("nav").toggle(); 
// });

$(window).resize(function() { 
	if ($(window).width() < 880) { 
		$(".index_1").hide(); 
	} else { 
		$(".index_1").show();
} 
})

// OVERLAY 
  $(".menu-link").click(function(event) {
    event.preventDefault();
    $(".overlay").toggleClass("open");
    $(".menu").toggleClass("open");
    $("header").hide();

  });

// SHOW/HIDE FUNCTIONS

// index

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

// artists

function learnMore() {
  event.preventDefault();
  $(this).hide();
  $(this).next(".moretxt, .learnlater").show();
}

function learnLater() {
  event.preventDefault();
  $(this).parent().siblings(".learnmore").show();
  $(this).parent(".moretxt, .learnlater").hide();

}

$(".learnmore").click(learnMore);
$(".learnlater").click(learnLater);



// ARTISTIS PAGE

// 3D carousel

var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { kuti: "n" }, rotate);
$(".prev").on("click", { kuti: "p" }, rotate);

function rotate(e){
  if(e.data.kuti=="n"){
    currdeg = currdeg - 90;
  }
  if(e.data.kuti=="p"){
    currdeg = currdeg + 90;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}


// DRUMS PAGE

// SLIDE ANIMATION








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
