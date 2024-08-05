const swiperNav = new Swiper('.nav-menu-bottom', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',  // Automatically adjust based on slide widths
    loop: false,
    spaceBetween: 5,
});

// mobile menu 
$(".toggle-mobile-menu").click(function () {
    $("#mobileMenu").slideToggle(200);
    $("#mobileMenu").toggleClass("toggled");
    $(this).find("i").toggleClass("fa-close fa-bars");
})

$("#mobileMenu .mobile-nav-menu .mobile-nav-menu-heading").click(function () {
    $(this).parent().find(".mobile-sub-menu").toggle(200);
    $(this).find("i").toggleClass("fa-caret-up fa-caret-down");
})

// handle scrolling
var $header = $('header');
var $mobileMenu = $('header #mobileMenu');
var $mobileMenuToggle = $('#toggleMobileMenu i');
var lastScrollTop = 0;

function handleScroll() {

    var isMenuToggled = $mobileMenu.hasClass('toggled');

    var currentScrollTop = $(window).scrollTop();

    if ($(window).width() > 700 && currentScrollTop >= 600) {
        $header.addClass('fixed');
    } else if ($(window).width() < 700) {


        if (isMenuToggled) {
            $header.addClass('show-header fixed-mobile');
            return;
        }


        if (currentScrollTop >= 300) {
            $header.addClass('fixed-mobile');
            if (currentScrollTop < lastScrollTop) {
                $header.addClass('show-header');
            } else {
                if (!isMenuToggled) {
                    $header.removeClass('show-header');
                }
            }
        } else {
            $header.removeClass('fixed-mobile show-header');
        }
    } else {
        $header.removeClass('fixed');
    }

    lastScrollTop = currentScrollTop;
}

$(window).on('scroll', handleScroll);
$(window).on('resize', handleScroll);

// Initial check
handleScroll();