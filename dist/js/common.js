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

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Изображение #%curr%</a> не загрузилось.'
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

function AjaxFormRequest(result_id, formMain, url) {
    jQuery.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: jQuery("#" + formMain).serialize(),
        success: function (response) {
            $(':input', '#' + formMain)
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .removeAttr('checked')
                .removeAttr('selected');
            setTimeout(() => {
                $("#message").hide();
            }, 5000);
        },
        error: function (response) {
            var par = document.getElementById(result_id);
            var error = document.createElement('p');
            error.classList.add("error");
            error.innerHTML = "Возникла ошибка при отправке формы.";
            par.appendChild(error);
            setTimeout(func, 700);
        }
    });
}

function func() {
    $("p.error").detach();
}

$('#obrat').submit(function (e) {
    e.preventDefault();
    AjaxFormRequest('result', 'obrat', './feedback.php');
});