$(document).ready(function () {

    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.sidebar-nav',
        offset: 10
    })

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 0
        }, 2000);
        event.preventDefault();
    });
       $('a.scroll-up').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 0
        }, 1000);
        event.preventDefault();
    });

});
new WOW().init();