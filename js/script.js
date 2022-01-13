$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });
});

// item:1,
//         loop:true,
//         nav:true,
//         autoplay:true,
//         autoplayspeed:1000,
//         smartSpeed:1500,
//         autopalyHoverPause:true,