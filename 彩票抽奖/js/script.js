window.onload = function(){

var box1 = document. getElementById("box1");                
var box2 = document.getElementById("box2");
var num = box1.getElementsByTagName("li");                //号码球    数组长度33
var numarr = [];                                         //选的号存放的数组

// -------------------自选球号----------------------
for(var i=0;i<num.length;i++)
{
    num[i].index = i;
    num[i].clk = 0;
    num[i].onclick = function()
    {
        var self = this;
        if(this.clk ==0 )
        {
            num[this.index].style.background = "url(images/ball.png) -50px 0 no-repeat";
            numarr.push(this.index+1);
            this.clk = 1;
        }
        else{
            num[this.index].style.background = "url(images/ball.png) 0 0 no-repeat";
            for(var j=0;j<numarr.length;j++)
            {
                if(this.index+1 == numarr[j])
                {
                    numarr.splice(j,1);
                }
            }
            this.clk = 0;
        }
        numarr.sort(function(a,b)
        {
            return a-b;
        })    
        console.log(numarr); 
    }
}

//------------------------------机选球号---------------------------- 

var randombtn = document.getElementById("randombtn");
randombtn.onclick = function()
{
    numarr = [];
    for(var k=0;k<num.length;k++)
    {
        num[k].style.background = "url(images/ball.png) 0 0 no-repeat";
        num[k].clk = 0;
    }
    for(var i=0;i<7;i++)
    {
        numarr[i] = Math.round((Math.random()*32) + 1);
        num[numarr[i]-1].style.background = "url(images/ball.png) -50px 0 no-repeat";
        num[numarr[i]-1].clk = 1;
        if(i > 0)
        {
            for(var j=0;j<i;j++)
            {
                if(numarr[j] == numarr[i])
                {
                    i--;
                    num[numarr[j]-1].clk = 0;
                    break;
                }
            }
        }
    }
    numarr.sort(function(a,b)
    {
        return a-b;
    })
    // for(var j=0;j<selectnum.length;j++)
    // {
        // selectnum[j].style.color = "#fff";
        // opennum[j].style.color = "#fff";
        // selectnum[j].innerHTML = numarr[j];
    // }
    // console.log(numarr);
}


// ---------------------------确定选号按钮-------------------------

var selectbtn = document.getElementById("btn1");           //选号按钮
var selectnum = box2.getElementsByTagName("li");          //所选的号码球    数组长度7
selectbtn.onclick = function()
{
    if(numarr.length > 7)
    {
        alert("最多只能选择7个号码！");
    }
    else if(numarr.length < 7)
    {
        alert("请选择7个号码！");
    }
    else
    {
        for(var i=0;i<selectnum.length;i++)
        {
            selectnum[i].style.color = "#fff";
            opennum[i].style.color = "#fff";
            selectnum[i].innerHTML = numarr[i];
        }
    }
}

// -------------------------------重新选号-------------------------------
var resertbtn = document.getElementById("resertbtn");

resertbtn.onclick = function()
{
    winarr = [];
    info.innerHTML = "";
    for(var i=0;i<selectnum.length;i++)
    {
        selectnum[i].innerHTML = "";
        opennum[i].innerHTML = "";
        selectnum[i].style.color = "#fff";
    }
    console.log(numarr);
}

// // -------------------------------清空-------------------------------
// var resertbtn = document.getElementById("resertbtn");

// resertbtn.onclick = function()
// {
//     numarr = [];
//     winarr = [];
//     info.innerHTML = "";
//     for(var j=0;j<num.length;j++)
//     {
//         num[j].style.background = "url(images/ball.png) 0 0 no-repeat";
//         num[j].clk = 0;
//     }
//     for(var i=0;i<selectnum.length;i++)
//     {
//         selectnum[i].innerHTML = "";
//         opennum[i].innerHTML = "";
//     }
//     console.log(numarr);
// }


// -------------------------------开奖球号和信息--------------------------------
var box3 = document.getElementById("box3");
var openbtn = document.getElementById("openbtn");            //开奖按钮
var opennum = box3.getElementsByTagName("li");          //开奖的号码球    数组长度7
var winarr = [];                                         //开奖球号
var info = document.getElementById("info");              //开奖信息
var same = 0;                                            //存储相同球个数
var mul = document.getElementById("mul");                //投注数
var money = document.getElementById("gold");                          
var gold = parseInt(document.getElementById("gold").innerHTML);         //金钱数字

openbtn.onclick = function()
{
    var jugarr = [];       
    gold -= 2 * parseInt(mul.value);
    // console.log(gold);
    if(gold >= 0 && parseInt(mul.value) >= 0)
    {
        for(var i=0;i<selectnum.length;i++)
        {
            jugarr[i] = parseInt(selectnum[i].innerHTML);
        }
        for(var j=0;j<selectnum.length;j++)
        {
            if(jugarr[j] != numarr[j] || numarr.length != 7)
            {
                alert("请正确确认选号结果！");
                jugarr = [];
                break;
            }
        }
        // console.log(jugarr);
        if(mul.value != "" && mul.value != null && !isNaN(parseInt(mul.value)) && jugarr.length == 7)
        {
            open();
            money.innerHTML = gold;
        }
        else
        {
            gold = parseInt(document.getElementById("gold").innerHTML);
        }
        // console.log(gold);
    }  
    else
    {
        alert("金币不足或者投注有误！");
        gold = parseInt(document.getElementById("gold").innerHTML);
        // console.log(gold);
    }
}

// ----------------------------开奖函数-----------------------
function open()
{
    for(var i=0;i<7;i++)
    {
        winarr[i] = Math.round((Math.random()*32) + 1);
        opennum[i].innerHTML = winarr[i];
        if(i > 0)
        {
            for(var j=0;j<i;j++)
            {
                if(winarr[j] == winarr[i])
                {
                    i--;
                    break;
                }
            }
        }
    }
    winarr.sort(function(a,b)
    {
        return a-b;
    })
    for(var j=0;j<opennum.length;j++)
    {
        selectnum[j].style.color = "#fff";
        opennum[j].style.color = "#fff";
    }
    for(var i=0;i<opennum.length;i++)
    {
        opennum[i].innerHTML = winarr[i];
        for(var j=0;j<opennum.length;j++)
        {
            if(numarr[j] == winarr[i])
            {
                same += 1;
                selectnum[j].style.color = "red";
                opennum[i].style.color = "blue";
            }
        }
    }

    if(same >= 4)
    {
        info.innerHTML = "<p>恭喜您中奖了~!</p><p>奖金等级： 四等奖；奖金额度：10元；</p><p>总奖金：" + 10*mul.value + "元</p>";
        gold += 10 * mul.value;
    }
    else if(same >=5)
    {
        info.innerHTML = "<p>恭喜您中奖了~!</p><p>奖金等级： 三等奖；奖金额度：30元；</p><p>总奖金：" + 30*mul.value + "元</p>";
        gold += 30 * mul.value;
    }
    else if(same >=6)
    {
        info.innerHTML = "<p>恭喜您中奖了~!</p><p>奖金等级： 二等奖；奖金额度：50元；</p><p>总奖金：" + 50*mul.value + "元</p>";
        gold += 50 * mul.value;
    }
    else if(same >= 7)
    {
        info.innerHTML = "<p>恭喜您中奖了~!</p><p>奖金等级： 一等奖；奖金额度：500元；</p><p>总奖金：" + 500*mul.value + "元</p>";
        gold += 500 * mul.value;
    }
    else
    {
        info.innerHTML = "<p>很遗憾,没有中奖。</p>";
    }
    same = 0;   
}


// --------------------------------样式改变---------------------

randombtn.onmouseover = function()   //随机选择按钮
{
    changestl(this,-110,-2);
}
randombtn.onmouseout = function()
{
    changestl(this,0,-2);
}
randombtn.onmousedown = function()
{
    changestl(this,-220,-2);
}
randombtn.onmouseup = function()
{
    changestl(this,0,-2);
}

selectbtn.onmouseover = function()   //确定选择按钮
{
    changestl(this,-110,-2);
}
selectbtn.onmouseout = function()
{
    changestl(this,0,-2);
}
selectbtn.onmousedown = function()
{
    changestl(this,-220,-2);
}
selectbtn.onmouseup = function()
{
    changestl(this,0,-2);
}

openbtn.onmouseover = function()   //开奖按钮
{
    changestl(this,-110,-50);
}
openbtn.onmouseout = function()
{
    changestl(this,0,-50);
}
openbtn.onmousedown = function()
{
    changestl(this,-220,-50);
}
openbtn.onmouseup = function()
{
    changestl(this,0,-50);
}

resertbtn.onmouseover = function()   //重置按钮
{
    changestl(this,-110,-50);
}
resertbtn.onmouseout = function()
{
    changestl(this,0,-50);
}
resertbtn.onmousedown = function()
{
    changestl(this,-220,-50);
}
resertbtn.onmouseup = function()
{
    changestl(this,0,-50);
}


function changestl(btn,x,y)
{
    btn.style.background = "url(images/btn.png) " + x+"px " + y+"px no-repeat";
}


var tab = document.getElementById("tab");                  
var tit = tab.getElementsByTagName("li");                  //选项切换标签
for(var j=0;j<tit.length;j++)
{
    tit[j].index = j;
    tit[j].onclick = function()
    {
        for(var i=0;i<tit.length;i++)
        {
            tit[i].className = "";
        }
        tit[this.index].className = "selected";
    }
}

// ----------------------------------------充值-------------------------------------
var getgoldbtn = document.getElementById("getgold");        //充值按钮

getgoldbtn.onclick = function()
{
    if(parseInt(document.getElementById("gold").innerHTML) <= 0)
    {
        getg();
    }
    else
    {
        alert("没钱再点我！");
    }
}

function getg()
{
    gold = parseInt(document.getElementById("gold").innerHTML);
    gold += 200;
    money.innerHTML = gold;
}


// -------------------------------------问题处理-------------------------------

}