
$(document).ready(function() {
    $('.navigation li[data-slide="1"]').addClass('active')
    //$("#text-one").fadeIn(2000);
    // $('#text-one').css('display', 'none')
    // $('#text-two').css('display', 'none')
    // $('#text-one').css('display', 'none')
    //Cache some variables
    var links = $('.navigation').find('li');
    //slide = $('.slide');
    //button = $('.button');
    //buttonstart = $('.button.start');
    //button0 = $('.button0');
    //scrolldown = $('.scrolldown');
    //mywindow = $(window);
    htmlbody = $('html,body');
    
    // Waypoint Intro
    // const waypoint_intro = new Waypoint({
    // element: document.getElementById('slide1'),
    // handler: function(direction) {
    //     console.log('Hello');
    //     $('.navigation li[data-slide="1"]').addClass('active')
    //     $('.navigation li[data-slide="2"]').removeClass('active')
    //     },
    //     offset: '0'
    // })  
    const waypoint_intro_2 = new Waypoint({
    element: document.getElementById('slide1'),
    handler: function(direction) {
        console.log('Hello');
        $('.navigation li[data-slide="1"]').addClass('active')
        $('.navigation li[data-slide="2"]').removeClass('active')
        
        },
        offset: '-25%'
    })  

    // waypoint one
    const waypoint_one = new Waypoint({
    element: document.getElementById('slide2'),
    handler: function(direction) {
        console.log(direction)
        //$("#text-two").fadeIn(2500);
        $('.navigation li[data-slide="1"]').removeClass('active')
        $('.navigation li[data-slide="2"]').addClass('active')
        $('.navigation li[data-slide="3"]').removeClass('active')
        }
    })
    // waypoint two
    const waypoint_two = new Waypoint({
    element: document.getElementById('slide3'),
    handler: function(direction) {
        //console.log('Scrolled to waypoint!')
        $('.navigation li[data-slide="2"]').removeClass('active')
        $('.navigation li[data-slide="3"]').addClass('active')
        $('.navigation li[data-slide="4"]').removeClass('active')
        }
    })


    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1000, 'easeInOutQuint');

    }
    
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });


});
 

