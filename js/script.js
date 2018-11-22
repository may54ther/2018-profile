$(document).ready(function () {
    var wh = $(window).height();
    var bool = true;

    if (wh <= 640) {
        wh = 640;
        $('.sec_home').height(wh)
    } else {
        $('.sec_home').height(wh);
    }

    $(window).resize(function () {
        wh = $(window).height();

        if (wh <= 640) {
            wh = 640;
            $('.sec_home').height(wh);
        } else {
            $('.sec_home').height(wh);
        }
    });

    $('.btn_scroll').click(function () {
        $('html, body').stop().animate({
            scrollTop: wh
        }, 500);
    });

    function offset(idx) {
        var offset = $("#sec" + idx).offset();
        $('html, body').animate({
            scrollTop: offset.top
        }, 700);
    }


    $('.btn_menu').click(function () {
        if (bool == true) {
            $('#gnb').slideDown("slow");
            bool = false;
        } else if (bool == false) {
            $('#gnb').slideUp();
            bool = true;
        }

        $('#gnb ul li a').click(function () {
            var all = $('#gnb ul li').index();
            var now = $(this).parents('li').index();

            for (i = 0; i <= all; i++) {
                $('#gnb').hide();
                bool = true;

                if (now == i) {
                    offset(i + 1);
                }
            }
        });
    });

    $('.pagination a').click(function (e) {
        e.preventDefault();

        var idx = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on');
        
        if (idx == 0) {
            $('.event').hide().siblings('.cabal').fadeIn();
        } else {
            $('.cabal').hide().siblings('.event').fadeIn();
        }
    });
});