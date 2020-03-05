<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>登录php</title>
</head>

<body>
	<?php
	include("inc.php");
		
	$user_name = $_POST["regist_account"];
	//全部是标签定义
	$user_password = $_POST["regist_password1"];
	
	//检查用户是否存在
	//双引号是标签，前面是数据库
	$sql = "select * from usertable where user_name ='$user_name'";
	$return = mysql_query($sql);
	$arr = array();
//	echo $sql;
//	exit;
	while($row = mysql_fetch_array($return)){
		$arr[]=$row;
		}
	if(!empty($arr)){
		die('<script language="JavaScript">;alert("用户名已存在");location.href="guan.html";</script>;');
//		die("用户名已存在");
	}
	//创建成功
	//双引号是标签，前面是数据库
	$sql = "insert into usertable(user_name,user_password) 
	values('$user_name','$user_password')";

	$sr = mysql_query($sql);
	
	if($sr){
		echo('<script language="JavaScript">;alert("注册成功");location.href="guan.html";</script>;');
//		echo("成功");
	}else{
		echo('<script language="JavaScript">;alert("注册失败");location.href="guan.html";</script>;');
//		echo("失败");
	}
	?>
</body>
</html>