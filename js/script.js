$(document).ready(function() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var defineHeight;

  function heightSize(width, height) {
    if (width >= 768 && height <= 820) return 800;
    else if (width <= 768 && height <= 640) return 640;
    else return height;
  }

  defineHeight = heightSize(windowWidth, windowHeight);
  $(".header").height(defineHeight);

  $(window).resize(function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    defineHeight = heightSize(windowWidth, windowHeight);
    console.log(defineHeight);
    $(".header").height(defineHeight);
  });

  $(".button__scroll-down").click(function() {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: defineHeight
        },
        500
      );
  });

  function offset(idx) {
    var offset = $(".sec" + idx).offset();
    $("html, body").animate(
      {
        scrollTop: offset.top
      },
      700
    );
  }

  var globalNav = $(".header__navigation");

  $(".header__menu").click(function() {
    if (globalNav.css("display") == "none") {
      globalNav.slideDown("slow");
    } else if (globalNav.css("display") == "block") {
      globalNav.slideUp();
    }
  });

  $(".header__navigation ul li a").click(function() {
    var all = $(".header__navigation ul li").index();
    var now = $(this)
      .parents("li")
      .index();

    for (i = 0; i <= all; i++) {
      $(".header__navigation").hide();

      if (now == i) {
        offset(i + 1);
      }
    }
  });

  $(".pagination a").click(function(e) {
    e.preventDefault();

    var idx = $(this)
      .parent()
      .index();
    $(this)
      .parent()
      .addClass("on")
      .siblings()
      .removeClass("on");

    if (idx == 0) {
      $(".event")
        .hide()
        .siblings(".cabal")
        .fadeIn();
    } else {
      $(".cabal")
        .hide()
        .siblings(".event")
        .fadeIn();
    }
  });
});
