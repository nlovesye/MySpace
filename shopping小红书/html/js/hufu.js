$(function()
{
// -----------------nav块-------------------
(function(){
var bt = true;
$(".nav .select").on("tap",function(){
    if(bt){
        $(".navlist").css("display","block");
        $(this).children(".icon").css("transform","rotate(180deg)");
        bt = !bt;
    }else{
        $(".navlist").css("display","none");
        $(this).children(".icon").css("transform","rotate(0deg)");
        bt = !bt;
    }
});

$(".navlist ul li").on("tap",function(){
    $(this).addClass("active").siblings().removeClass("active");
})

$(".nav .right>div").on("tap",function(){
    $(this).addClass("active").siblings().removeClass("active");
})
})();


})