$(function(){

// --------------banner轮播图----------------
(function(){
    var i = 0;
    
    // --------------左滑动---------------
    $(".banner").on("swipeLeft",function(){
        i++;
        if(i > 3){
            $(".banner ul.pic").css("width","500%");
            $(".banner ul.pic li").css("width","20%");
            var clone = $(".banner ul.pic li").first().clone();
            $(".banner ul.pic").append(clone);
            $(this).children("ul.pic").animate({
                "margin-left":"-"+i*100+"%"
            },function(){
                $(".banner ul.pic").css("margin-left","0").children().last().remove();
                $(".banner ul.pic").css("width","400%");
                $(".banner ul.pic li").css("width","25%");
            });
            i = 0;
            $(this).children(".number").children("span").first().html(i+1);
            return;
        }
        $(this).children("ul.pic").animate({
            "margin-left":"-"+i*100+"%"
        });
        $(this).children(".number").children("span").first().html(i+1);
    });
    // -----------------右滑动--------------
    $(".banner").on("swipeRight",function(){
        i--;
        if(i < 0){
            $(".banner ul.pic").css("width","500%");
            $(".banner ul.pic li").css("width","20%");
            var clone = $(".banner ul.pic li").last().clone();
            $(".banner ul.pic").prepend(clone);
            $(".banner ul.pic").css("margin-left","-100%");
            $(this).children("ul.pic").animate({
                "margin-left":"0"
            },function(){
                $(".banner ul.pic").css("margin-left","-300%").children().first().remove();
                $(".banner ul.pic").css("width","400%");
                $(".banner ul.pic li").css("width","25%");
            });
            i = 3;
            $(this).children(".number").children("span").first().html(i+1);
            return;
        }
        $(this).children("ul.pic").animate({
            "margin-left":"-"+i*100+"%"
        });
        $(this).children(".number").children("span").first().html(i+1);
    });
})();


apiready = function () {

    // --------------------首页切换页面--------------
    $api.fixStatusBar( $api.dom('header') );
    (function(){
        var pages = ["html/life","html/japan","","goumai/shopping"];
        $("header .nav li").on("tap",function(){
            openframe(pages[$(this).index()]);
            $(this).children("a").addClass("active").parent().siblings().find("a").removeClass("active");
        });
        $("header .logo").on("tap",function(){
            $("header .nav li a").removeClass("active");
            api.openFrame({
                name: "index",
                url: "index.html",
                rect: {
                    x: 0,
                    y: 0,
                    w: api.winWidth,
                    h: "auto"
                },
                pageParam: {
                    name: 'test'
                },
                bounces: true,
                bgColor: 'rgba(255,255,255,1)',
                vScrollBarEnabled: true,
                hScrollBarEnabled: true
            });
        });

        $("header .search").on("tap",function(){
            openframe("html/search");
        });
    })();

    // ----------------目的地页切换页面---------------
    (function(){
        var pages = ["japan","korean","hongkong","america","france","koel","koel","england","thailand","taiwan","itally","deguo","More"];
        $(".nav .title span a").on("tap",function(){
            openframe2(pages[$(this).index()]);
            $(this).addClass("bottom_style").siblings().removeClass("bottom_style");
        });
    })();

}

function openframe(url){     
    api.openFrame({
        name: url,
        url: url+".html",
        rect: {
            x: 0,
            y: $api.dom('header').offsetHeight,
            w: api.winWidth,
            h: $api.dom('#main').offsetHeight
        },
        pageParam: {
            name: 'test'
        },
        bounces: true,
        bgColor: 'rgba(255,255,255,1)',
        vScrollBarEnabled: true,
        hScrollBarEnabled: true
    });
};

function openframe2(url){     
    api.openFrame({
        name: url,
        url: url+".html",
        rect: {
            x: 0,
            y: $api.dom('.nav').offsetHeight,
            w: api.winWidth,
            h: "auto"
        },
        pageParam: {
            name: 'test'
        },
        bounces: true,
        bgColor: 'rgba(255,255,255,1)',
        vScrollBarEnabled: true,
        hScrollBarEnabled: true
    });
};

function closeframe(pagename){
    api.closeFrame({
        name: pagename
    });
}

   
})