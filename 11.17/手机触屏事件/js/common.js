(function(){
    function w() {
    var r = document.documentElement;
    var a = r.getBoundingClientRect().width;
    // console.log(a);
        if (a > 750 ){
            a = 750;
        } 
        rem = a / 7.5;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
})();

window.onload=function(){

    var W=document.documentElement.getBoundingClientRect().width;
    console.log(W);
    var startX,startY,endX,endY,time,isScrolling;
    var banner=document.getElementById("banner");
    var slider=document.getElementById("slider");
    slider.style.left=0;
    
    banner.addEventListener("touchstart",function(){
        var touch = event.targetTouches[0];
        startX = touch.pageX;
        startY = touch.pageY;
        isScrolling = 1;
    },false);

    banner.addEventListener("touchmove",function(){
        var touch = event.targetTouches[0];
        endX = touch.pageX - startX;
        endY = touch.pageY - startY;
        startX = touch.pageX;
        startY = touch.pageY;
        isScrolling = Math.abs(endX) > Math.abs(endY) ? 1:0;
        if(isScrolling){
            // event.preventDefault();
            slider.style.left = parseInt(slider.style.left) + endX + "px";
        }
    },false);
   
   banner.addEventListener("touchend",function(){
        banner.touchmove = null;
   },false);
}

