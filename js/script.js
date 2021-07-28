$(document).ready(function () {
    $('.nav-icon').click(function (e) {
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) {
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
    });
    $('.client-review-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });
});