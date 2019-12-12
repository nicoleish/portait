// var spr;
// var anim;
// function preload() {
//   anim = loadAnimation("TZMwWi-cute-clipart-transparent.png");
// }
// function setup() {
//   createCanvas(400, 400);
//   spr = createSprite(width/2, height/2);
//   spr.addAnimation("default", anim);
// }
// function draw() {
//   background(255);
//   spr.position.x = mouseX;
//   spr.position.y = mouseY;
//   if (mouseIsPressed) {
//     spr.rotation -= 2;
//   }
//   drawSprites();
// }

// $(".img-fluid").addClass("wow fadeIn z-depth-1-half");

// new WOW().init();

// var spr;
// function setup() {
//   createCanvas(400, 400);
//   spr = createSprite(
//     width/2, height/2, 40, 40);
//   spr.shapeColor = color(255);
// }
// function draw() {
//   background(50);
//   spr.velocity.x = (mouseX - spr.position.x) * 0.2;
//   spr.velocity.y = (mouseY - spr.position.y) * 0.2;
//   drawSprites();
// }

// $('h3 span:first-child').after("<span class=\"dots\"> </span>");

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);