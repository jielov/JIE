<?php
$conn = mysql_connect("127.0.0.1","root","root")or die("数据库链接错误");;

mysql_select_db("usre",$conn);
mysql_query("SET NAMES utf8");
?>