<?php
$a[]="Rose";
$a[]="Alice";
$a[]="John";
$a[]="狗子";
$hint="";
$name=$_GET["q"]; // user为客户端数据
for ($i=0;$i<count($a);$i++){
   if ($name==$a[$i]){
        $hint="用户名重复！";
   }
}
if ($hint==""){
    $hint="用户名不重复!";
}
echo $hint;
?>