
// const mySpan = document.querySelector('#myspan')
// mySpan.addEventListener('click', myFunction)





// Slide is set initialy to 1
let slideIndex = 1;


// Calls functions below but with arrows, not the icon click
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') { toggleSlides(-1) } 
  if(e.key === 'ArrowRight') { toggleSlides(1) } 
});

// Function adds value -1 for previous and 1 for next slide to the initial value
function toggleSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {

  console.log(n)
  let i;
  const slides = document.getElementsByClassName("my-slides");
  const dots = document.getElementsByClassName("dot");
  // Edge cases
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // Makes all slides disapear
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // Makes all dots disapear
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Makes slide appear
  slides[slideIndex-1].style.display = "block";
  // Makes dot appear
  dots[slideIndex-1].className += " active";

}


//
/*

  $('#color').click(function(){
    console.log("hi")
    $('#slide2').fadeOut(800)
    $('#slide2b').fadeIn(800)
    
});
*/
const slideOneBW = document.querySelector('#slide1')
const slideOneColor = document.querySelector('#slide1-color')
const button1 = document.querySelector('#btn-bottom-1')
let isColored = true


function colorize() {

  if(isColored === true) {
  
    $('#slide1-color').fadeTo(850, 1)
    button1.children[0].innerText = 'Zdjęcie koloryzowane'
    isColored = false

  } else {
    
    $('#slide1-color').fadeTo(850, 0)
    button1.children[0].innerText = 'Zdjęcie czarno-białe'
    isColored = true

  }
  
}


// Span Lokalizacja

function myFunction() {
  alert("huj")
}




/* Fading Info *//* Fading Info *//* Fading Info *//* Fading Info */
const info = document.getElementById('btn-bottom-3')
const hiddenP = document.getElementById('hidden-info')

info.addEventListener('mouseenter', unfade)
info.addEventListener('mouseleave', fade)

function unfade() {
  
    var op = 0.1;  // initial opacity
    hiddenP.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        hiddenP.style.opacity = op;
        hiddenP.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

function fade() {

  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          hiddenP.style.display = 'none';
      }
      hiddenP.style.opacity = op;
      hiddenP.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 10);
}

function hideButton() {
  document.querySelector('#btn-bottom-4').style.display = 'none'
  document.querySelector('#btn-con').style.left = '8vw'
}

/** Znikanie menu przy przesuwaniu */

var prevScrollpos = window.pageYOffset;


window.onscroll = function() {


var currentScrollPos = window.pageYOffset;

var customScrollPos = window.innerHeight / 2; 

console.log(prevScrollpos)
console.log(currentScrollPos)
  if (prevScrollpos < customScrollPos) {
    document.querySelector(".bttm-menu-con").style.bottom = "0";

  } else {
    
    document.querySelector(".bttm-menu-con").style.bottom = "-114px";

  }
  prevScrollpos = currentScrollPos;
}