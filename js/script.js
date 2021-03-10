
function saySmthSlowly(string) {
    let przestrzen = document.createElement("br");
    for(let i = 0; i < string.length; i ++) {
        setTimeout(() => {
            document.getElementById('animated-header').append(string[i])
        }, i * 50)
    }
    document.getElementById('animated-header').append(przestrzen)
}
setTimeout(() => {
    saySmthSlowly("Interaktywny ");
}, 1000)
setTimeout(() => {
    saySmthSlowly("Przewodnik ");
}, 2000)
setTimeout(() => {
    saySmthSlowly("Warszawski");
}, 3000)



$(document).ready(function() {

    
    // Cache variables
    var links = $('.navigation').find('li');
    htmlbody = $('html,body');
    

   
    //mywindow = $(window);
    //Initial class active to the intro element of menu
    //$('.navigation li[data-slide="1"]').addClass('active')

    // Two arrays of waypoint have to be created, one for scrolling down and second for scrolling up, it's becouse offset is caculated
    // when waypoint if created so we can't have two offsets for one waypoint, we need custom waypoints for every direction. 
    // Also, two offset values give better control.
    const waypointsWayDown = $('.slide').waypoint(function(direction) {
        console.log(this.element.id + ' hit 25% from top of window') 
        dataslide = parseInt($(this)[0]['element']['attributes'][2]['value'])
    
        if (direction === 'down') {
            if(dataslide === 1) {
                // An exception for the first slide
                $('.navigation li[data-slide="1"]').addClass('active-one')
            } else {
                // An exception for the first slide
                $('.navigation li[data-slide="1"]').removeClass('active-one')
                // The rest of slides
                $('.navigation li[data-slide="' + dataslide + '"]').addClass('active')
                $('.navigation li[data-slide="' + (dataslide-1) + '"]').removeClass('active')
            }
        } 

        }, {
        offset: '25%'
        })

    const waypointsWayUp = $('.slide').waypoint(function(direction) {
        console.log(this.element.id + ' hit 20% from bottom of window') 
        dataslide = parseInt($(this)[0]['element']['attributes'][2]['value'])
        adjustParams(dataslide);
        if (direction === 'up') {
            if(dataslide === 1) {
                // An exception for the first slide
                $('.navigation li[data-slide="1"]').addClass('active-one')
                // Second class
                $('.navigation li[data-slide="2"]').removeClass('active')
            } else {
                // The rest of slides
                $('.navigation li[data-slide="' + dataslide + '"]').addClass('active')
                $('.navigation li[data-slide="' + (dataslide+1) + '"]').removeClass('active')
            }
        } 

        }, {
        offset: '-20%'
        })
      

    //When the user clicks on the navigation links, 
    // get the data-slide attribute value of the link and pass 
    // that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = this.getAttribute('data-slide')
        console.log(dataslide)
        goToByScroll(dataslide);
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. 
    //The Jquery easing plugin is imported in html - jquery-ui.js
    function goToByScroll(dataslide) {
        
            switch (dataslide) {
                case '1':
                    document.getElementById("myAnchor1").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                  break;
                case '2':
                    document.getElementById("myAnchor2").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                  break;
                case '3':
                    document.getElementById("myAnchor3").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                  break;
                case '4':
                    document.getElementById("myAnchor4").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                  break;
                case '5':
                    document.getElementById("myAnchor5").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                  break;
                case '6':
                    document.getElementById("myAnchor6").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                break;
                case '7':
                    document.getElementById("myAnchor7").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                break;
                case '8':
                    document.getElementById("myAnchor8").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                break;
                case '9':
                    document.getElementById("myAnchor9").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                break;
                case '10':
                    document.getElementById("myAnchor10").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                break;
              }
    }
    
    

});
 

/***//***//***//***//***//***//***//***//***//***//***//***//***//***//***/

const mapBurger = document.getElementById('open-map');
let menuOpen = false;
const iframe = document.getElementsByTagName("iframe");

function toggleNav() {
  if(!menuOpen) {
    document.getElementById("mapka").style.left = "1em";
    mapBurger.innerHTML = "&times; "
    menuOpen = true

    // Makeing sure map is in good position
    
    iframe.src = "https://www.openstreetmap.org/export/embed.html?bbox=21.016132235527042%2C52.21076239459632%2C21.02321326732636%2C52.213766696368644&amp;layer=mapnik";
  } else {
    document.getElementById("mapka").style.left = "-296px";
    mapBurger.innerHTML = "&#9776; Mapa"
    menuOpen = false;
  }

}


let slides = document.getElementsByClassName("my-slides");
function adjustParams(dataslide) {
    if(dataslide > 1) {
        slides = document.getElementsByClassName("my-slides-s");
    } else if (dataslide == 1) {
        slides = document.getElementsByClassName("my-slides");

    }
}

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
// const slides = document.getElementsByClassName("my-slides");
function showSlides(n) {

  //console.log(n)
  let i;
  
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

