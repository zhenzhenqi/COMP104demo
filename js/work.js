$(document).ready(function () {
    //    console.log("my js is loaded");
    //    $('.hide-title img').mouseenter(function () {
    //        $(this).siblings().css('opacity', '1');
    //    });
    //    $('.hide-title img').mouseleave(function () {
    //        $(this).siblings().css('opacity', '0');
    //    });

    $('.hide-title img').mouseenter(function () {
        $(this).siblings().animate({
            opacity: '1',
            right: '50px'
        }, {
            duration: 1000
        });
    });
    $('.hide-title img').mouseleave(function () {
        $(this).siblings().animate({
            opacity: '0',
            right: '0'
        }, {
            duration: 1000
        });
    });


});