


$(document).ready(function () {


    // Magnific Popup Image
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Project Popup Image
    $('.project-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });



    // Clients Slider
    $('.clients').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        loop: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]
    });

    // Projects Filter

    // init Isotope
    var $grid = $('.project-items').isotope({
        // options
    });
    // filter items on button click
    $('.projects-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $('.projects-menu').on('click', 'li', function () {
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    })
})
//portfolio slider
$(document).ready(function () {
    $('.portfolio-details-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});