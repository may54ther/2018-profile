$(document).ready(function () {
    var ht = $(window).height();
  
    $("section").height(ht);
    $("html,body").animate({ "scrollTop": 0 }, 700, "easeOutQuad");
    
    $(window).on("resize", function () {
        var ht = $(window).height();
        
        $("section").height(ht);
    });

    $("#gnb ul li a").on("click", function (e) {
        var ht = $(window).height();
        var i = $(this).parent('li').index();
        var nowTop = i * ht;

        $("html,body").stop().animate({ "scrollTop": nowTop }, 700, "easeOutQuad");
    });

    $(window).on("scroll", function () {
        var ht = $(window).height();
        var scroll = $(window).scrollTop();

        for (var i = 0; i < 5; i++) {
            if (scroll >= ht * i && scroll < ht * (i + 1)) {
                $("#gnb ul li").removeClass();
                $("#gnb ul li").eq(i).addClass("on");
            };
        }
        
        $("section").on("mousewheel", function (event, delta) {
            var cnt=$(this).index();
            
            if (delta > 0) {
                var prev = $(this).prev().offset().top;

                $("html,body").stop().animate({ "scrollTop": prev }, 700, "easeOutQuad"); 

            } else if (delta < 0) { 
                if(cnt < 5){
                    var next = $(this).next().offset().top;
                    $("html,body").stop().animate({ "scrollTop": next }, 700, "easeOutQuad");
                }

            }

        });
       
    });
   
});
