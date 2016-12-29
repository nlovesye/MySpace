window.onload = function() {
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var box = document.getElementById('box');
    var pic = document.getElementById('pic');
    var btn = document.getElementById('btn');
    var li = document.getElementsByTagName('li');
    function mov(x) {
        pic.style.left = parseInt(pic.style.left) + x + "px";
        if(parseInt(pic.style.left) > -600){
            pic.style.left = "-3000px";
        }
        if(parseInt(pic.style.left) < -3000){
            pic.style.left = "-600px";
        }
        var time = 300;
        var t = 10;
        var speed = x/(time/t);
        // function go(){
        //     if((speed<0 && parseInt(pic.style.left)>(parseInt(pic.style.left)+x)) || (speed>0) && parseInt(pic.style.left)<(parseInt(pic.style.left)+x))
        //     {   
        //         pic.style.left = parseInt(pic.style.left) + speed + "px";
        //         setTimeout(go,t);
        //     }else
        //     {
        //         if(parseInt(pic.style.left) > -600){
        //             pic.style.left = "-3000px";
        //         }
        //         if(parseInt(pic.style.left) < -3000){
        //             pic.style.left = "-600px";
        //         }
        //     }
        // }
        // go();
    }

    var index = 1;
    function showbtn(){
        if(index > 5){
            index = 1;
        }
        if(index < 1)
        {
            index = 5;
        }
        for(var i=0;i<li.length;i++){
            if(li[i].className == "btnon"){
                li[i].className = "";
            }
            li[index - 1].className = "btnon" ;
        }
    }

    prev.onclick = function(){
        mov(600);
        index -= 1;
        showbtn();
    }
    next.onclick = function(){
        mov(-600);
        index += 1;
        showbtn();
    }

    // alert(parseInt(pic.style.left));
    for(var i=0;i<li.length;i++) {
        li[i].onclick = (function(x){
            return function() {
                index = x;
                showbtn();
                return pic.style.left = (-600)*x + "px";
            }
        })(i+1)
    }

    function time(){
        pic.style.left = (-600)*index + "px";
        showbtn();
        index++;
        if(index == 6) {
            index = 1;
        }
    }
    time();
    var T = setInterval(function(){
        time();
    },3000);
    box.onmouseover = function() {
        clearInterval(T);
    }
    box.onmouseout = function() {
        T = setInterval(function(){
        time();
    },3000);
    }
}