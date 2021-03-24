$(document).ready(function () {
    var Header =$('.main-header');
    $(window).scrollTop() > 100 && Header.addClass("sticky");
    $(window).on('scroll',function(a){
       if($(this).scrollTop() < $('.main-header').height()){
           $(".main-header").removeClass("sticky");
       }
        else{
           $(".main-header").addClass("sticky");   
       }
    });
    
    
    $('.timer').countTo();
    
    $('#HeroSlider').owlCarousel({
        loop: true,
        margin: 0,
        loop: true,
        navSpeed: 1000,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            300: {
                items: 1
            },
            430: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
     
    //About Slider Carousel
    $('#about-slider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    autoplay:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
 
        
}) 
    
// Testimonial  Slider
     $('#testimonial-slider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    autoplay:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
 
        
}) 
});

