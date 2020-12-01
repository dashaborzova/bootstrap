$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');

    });
});

$(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
    } else {
        $('.nav-menu').removeClass('custom-navbar');
    }
});

$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop: true, //прокручивание элементов по кругу

        nav: false, //отобразить элементы управления
        margin: 40,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});