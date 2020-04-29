$(document).ready(function () {
  
  $('.slider-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:14500,
    dots: false,
    merge:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});

var owl = $('.testimonial-carousel');

owl.owlCarousel({
  loop:true,
  margin:0,
  responsiveClass:true,
  nav: false,
  merge:true,
  dots: false,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
})

$("#prev").click(function(){
  owl.trigger("prev.owl.carousel");
});

$("#next").click(function(){
  owl.trigger("next.owl.carousel");
});


});