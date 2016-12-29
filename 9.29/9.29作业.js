// 作用域练习题
// 1、
// var t = "a";
// function test(){
// var t = "b";
// alert(t);
// }
// test();
// alert(t);
// 以上代码会弹出什么？                 b,a

// 2、
// var a = 5;
// function test1(){ var a = 4;}
// function test2(){ a = 3; }
// alert(a);
// test1();
// alert(a);
// test2();
// alert(a);
// // 分别输出什么？          5,5,3

// 3、
// var a = 10;
// seta();
// function seta(){
// 	var a = 20;
// 	alert(a);
// }
// alert(a);
// // 请写出alert的值。                 20,10

// 4、
// var a=20;
// sdf();
// function sdf(){
// 	var a =10;
// 	alert(a);
// }
// alert(a);
//                                  10,20

// 5、
// (function(){
// var a=b=5;
// alert(typeof(a));
// alert(typeof(b));
// })();
// alert(typeof(a));
// alert(typeof(b));
// // 四次弹出的类型值分别为？                 number,number,undefined,number


// 6. 
// var i; alert(i);         
//                        undefined

// 7. 
// var i; i--; alert(i);  
//                            NaN 

// 8. 关于作用域
// var x=1;
// function print(){
// 　　alert(x);　　　　　
// 　　var x = 'hello world';
//     alert(x);　　　　
// }
// print();
//                         undefined, hello world
 
// 9. 关于作用域
// var name = 'a';
// function first(){
// 　　alert(name);
// } 
// function second(){
// 　　var name = 'b';
// 　　first();　　　　　　
// }
// second();　
//                                a     　
 
// 10. 关于执行顺序
// function show(i){
// 　　 alert(2<i<3);    
// }
// show(1);　　　　　 
//                               true

// 11.
// alert(a);
// alert(b);
// var a = "111";
// b = "111";
//                                undefined,报错  

// 12.
// var i=9;
// function fo(){
// 	var i=0;
// 	return function(n){
// 		console.log(i);
// 		return n+(++i);
// 	}
// };
// var f=fo();
// var a = f(15); 
// alert(a)
// var b = fo()(15); 
// alert(b);
// var c = fo()(20); 
// alert(c);
// var d = f(20);
// d = f(20);
// alert(d);
//                                    16,16,21,23

// 13.
// var a = "hello";
// b = "world";
// Test();
// function Test() {
//     alert(a + " " + b);
//     var a = "welcome";
//     var b = "china";
//     alert(a + " " + b);
// }
// alert(a + " " + b)
//                                       undefined undefined,welcome china,hello world

// 14.
// var a = 100;
// function show(a){
// 	console.log(a);
// 	a++;
// 	console.log(a);
// 	var a = 10;
// 	console.log(a);
// 	a = a++ + 20;
// 	console.log(a);
// 	a = ++a + 20;
// 	console.log(a);
// }show(600);
//                                             600,601,10,30,51