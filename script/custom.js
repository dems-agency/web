(function ($) {

  // Instantiate MixItUp:
  $('#Container').mixItUp();

  $(window).scroll(function (e) {

    var distanceScrolled = $(this).scrollTop();
    $('#blur-scroll').css('-webkit-filter', 'blur(' + distanceScrolled / 90 + 'px)');

  });

  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  // Back to top
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 800);
    });

    // Customers
    $(function () {
      $('.jcarousel')
        .jcarousel({
          // Core configuration goes here
        })
        .jcarouselAutoscroll({
          interval: 4000,
          target: '+=1',
          autostart: true
        })
        ;
    });

  }
  // Nav.
  $("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $(".page-scroll").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  /*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
  $(window).load(function () {

    // will first fade out the loading animation 
    $("#loader").fadeOut("slow", function () {

      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");

    });

  });

  //Poput portafolio
  $('.item-wrap a').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    removalDelay: 300,
    showCloseBtn: false,
    mainClass: 'mfp-fade'

  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
  var $window = $(window),
    $body = $('body');
  // Banner.
  var $banner = $('#banner');


  // Video check.
  var video = $banner.data('video');

  if (video)
    $window.on('load.banner', function () {

      // Disable banner load event (so it doesn't fire again).
      $window.off('load.banner');

      // Append video if supported.

      $banner.append('<video autoplay loop><source src="' + video + '.mp4" type="video/mp4" /><source src="' + video + '.webm" type="video/webm" /></video>');
    });


})(jQuery);


