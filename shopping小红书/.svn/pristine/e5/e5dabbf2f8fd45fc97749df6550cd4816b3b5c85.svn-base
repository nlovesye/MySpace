$(function(){
    $(".top span").click(function(){
        $(this).addClass('line-down').siblings().removeClass('line-down');
    });
    $('.menu-left,.menu-down').click(function(){
        $('.menu-down').slideToggle();
    });
    $('.menu-right span').click(function(){
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        if(index==0){
            $('.branch').css({'display':'block'});
            $('.shopping-branch').css({'display':'none'});
        }else{
            $('.shopping-branch').css({'display':'block'});
            $('.branch').css({'display':'none'});
        }
    });
    $('.menu-down li').click(function(){
        $(this).addClass('fcolor').siblings().removeClass('fcolor');
        $('.menu-left').html($(this).text());
    });
    $('.menu .tag-list li').click(function(){
        $(this).addClass('listcolor').siblings().removeClass('listcolor');
    });
    $('.follow-btn,.top-cover,.close').click(function(){
        $('.top-cover').fadeToggle(99);
        $('.down-s').fadeToggle(100);
    });
});
