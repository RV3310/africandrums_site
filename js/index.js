
$(document).ready(function() {

// variables
var ww = $(window).width();


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
    $("h1").toggleClass("hidden");
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


// ARTISTIS PAGE

// 3D carousel

var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { 
  kuti: "n" 
  }, 
  rotate);
$(".prev").on("click", { 
  kuti: "p" 
  }, 
  rotate);

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

// click on tab

$('.js-instrument').on('click', function() {
  var instrument = $(this).data('instrument');

  $(".instr").hide();
  $('.box.' + instrument).show();
});

$(".return").on("click", function() {
  var instrument = $(this).data('instrument');

    $(".instr").show();
   $('.box.' + instrument).hide();
})

$('.js-artist').on('click', function() {
  var artist = $(this).data('artist');

  $('.carousel').hide();
  $('.buttons').hide();
  $('.moretxt.' + artist).show();
})

$('.learnlater').on('click', function() {
  var artist = $(this).data('artist');

  $('.carousel').show();
  $('.buttons').show();
  $('.moretxt.' + artist).hide();
})


/*************************************
BEATS
*************************************/

// Listen for keydown/click event and start playSound() for the rigth divc
$(window).keydown(playSound);
// $(div).click(playSound);
// Listen for the keyup event and removeClass() of playing for the currently pressed key
$(window).keyup(stopPlay);

function playSound(e) {
 // find key/click event by data-key attribute
  var key = $(div).data('key');
//  find corresponding audio by data key
  var audio = $(audio).data('key');
// if key pressed has no data-key attribute don't do anything
  if (!audio) {
    return; 
  }
 // add .playing class to key with correct data-key attribute
  key.addClass('playing'); 
 // start the currently selected audio from the beginning
  audio.currentTime = 0; 
  // play the correct sound 
  audio.play(); 
}

function stopPlay(e) {
   // find released key by data-key
  var key = $(div).data("key"); 
  // if released key has no data-key attribute don't do anything
  if (!key) {
    return; 
  }
 // remove .playing class from correct released key 
  key.removeClass('playing'); 
}