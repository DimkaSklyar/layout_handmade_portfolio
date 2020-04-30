$(document).ready(function () {

    $('.slider-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 14500,
        dots: false,
        merge: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    var owl = $('.testimonial-carousel');

    owl.owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        merge: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            992: {
                items: 1,
            }
        }
    })

    $("#prev").click(function () {
        owl.trigger("prev.owl.carousel");
    });

    $("#next").click(function () {
        owl.trigger("next.owl.carousel");
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $(".btn-menu").click(function (e) {
        e.preventDefault();
        $(".nav").addClass("open");
    });

    $(".btn-close-menu").click(function (e) {
        e.preventDefault();
        $(".nav").removeClass("open");
    });


});