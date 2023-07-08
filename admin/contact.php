<?php
    header('Content-Type: application/json');
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
	$query = "insert into message(name,email,comments,createTime) value('{$name}','{$email}','{$comments}',now())";
	if ($result = execute_bool($link, $query)){
        send_message($result,$name,$email,$comments,date("Y-m-d H:i:s"));
        $message = "留言提交成功！！！";
        echo json_encode($message, JSON_UNESCAPED_UNICODE);

    }else{
        $message = "留言提交失败，请稍后再试！";
        echo json_encode($message, JSON_UNESCAPED_UNICODE);
    }



