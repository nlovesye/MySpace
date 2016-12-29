window.onload = function(){
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        var num1 = parseInt(document.getElementById("txt").value);
        var select = document.getElementById("select").value;
        var result = document.getElementById("result");
        var num2 = document.getElementsByName("num2");
        var arr = [];
        var sum = 0;
        var p = document.getElementsByTagName("p")[0];
        if(isNaN(num1) || num1 == "" || num1 == null){
            alert("请在第一个输入框中输入数字");
        }else{
            for(var i=0;i<num2.length;i++){
                if(num2[i].checked){
                    arr.push(parseInt(num2[i].value));
                }
            }
            for(var j=0;j<arr.length;j++){
                sum += arr[j];
            }
            switch(select){
                case "+": 
                result.value = num1 + sum;
                break;
                case "-": 
                result.value = num1 - sum;
                break;
                case "*": 
                result.value = num1 * sum;
                break;
                case "/": 
                result.value = num1 / sum;
                break;
            }
        }
        
    };
}