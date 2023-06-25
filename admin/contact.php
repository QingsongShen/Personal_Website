<?php
	require_once("config.inc.php");
	require_once("mysql.inc.php");
	require_once("mail.inc.php");
	// echo var_dump($_POST['param']["name"]);

	//连接数据库
	$link = connect();

	//处理传入数据
	$_POST = escape($link,$_POST);
	$name = $_POST['name'];
	$email = $_POST['email'];
	$comments = $_POST['comments'];
	// echo $name." ".$email." ".$comments;

	//将信息储存进数据库
	$query = "insert into message(name,email,comments,time) value('{$name}','{$email}','{$comments}',now())";
	$result = execute_bool($link,$query);
	
	$tmp = send_message($result,$name,$email,$comments,date("Y-m-d H:i:s"));
	echo $tmp;


