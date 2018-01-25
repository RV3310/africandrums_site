
$(document).ready(function() {
/*******************************
CAROUSEL
*******************************/

var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { 
  kuti: "n" }, rotate);
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


/*********************************************
SHOW/HIDE
**********************************************/

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


});






