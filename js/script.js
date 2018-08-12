$(document).ready(function () {
    
    function wHeight(){
        var ht = $(window).height();
        var wh = $(window).width();
        
        if(wh>623 && ht<900) {ht = 900}
        return ht;
    }
    
    var ht = wHeight();
  
    $("#content .comnArea").height(ht);
    $("html,body").animate({ "scrollTop": 0 }, 700, "easeOutQuad");
    
    $(window).on("resize", function () {
        var ht = wHeight();
        
        $("#content .cmnArea").height(ht);
    });
    
    $(".scrollDown a").click(function(){
        var next = wHeight();
        
        $("html,body").stop().animate({ "scrollTop": next }, 700, "easeOutQuad"); 
    });
    
    $("#gnb ul li a").on("click", function (e) {
        var ht = wHeight();
        var i = $(this).parent('li').index();
        var nowTop = (i+1) * ht;

        $("html,body").stop().animate({ "scrollTop": nowTop }, 700, "easeOutQuad");
    });

    $(window).on("scroll", function () {
        var ht = wHeight();
        var scroll = $(window).scrollTop();

        if(scroll >= ht){
            $('#headerArea').addClass('show').fadeIn();

            for (var i = 1; i < 6; i++) {
                if (scroll >= ht * i && scroll < ht * (i + 1)) {
                    $("#gnb ul li").removeClass();
                    $("#gnb ul li").eq(i-1).addClass("on");
                };
            }   
        } else {
            $('#headerArea').removeClass('show').fadeOut();
        }
        
        $("#content .comnArea").on("mousewheel", function (event, delta) {
            var cnt=$(this).index();
            
            if (delta > 0) {
                var prev = $(this).prev().offset().top;

                $("html,body").stop().animate({ "scrollTop": prev }, 700, "easeOutQuad"); 
                
            } else if (delta < 0) { 
                if(cnt < 7){
                    var next = $(this).next().offset().top;
                    $("html,body").stop().animate({ "scrollTop": next }, 700, "easeOutQuad");
                }

            }

        });
       
    });
   
});
