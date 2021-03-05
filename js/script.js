
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
      

    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. 
    //The Jquery easing plugin is imported in html - jquery-ui.js
    function goToByScroll(dataslide) {
        //console.log(dataslide)
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1500, 'easeInOutQuint');
    }
    
    

});
 

