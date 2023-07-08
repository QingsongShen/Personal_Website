<?php
include_once ("../config.inc.php");
include_once ("../mysql.inc.php");

$link = connect();
// 创建管理员密码
$username = "sqsgoodluck";
$password = $_GET['password'];
$email = "sqsgoodluck@qq.com";
$phone = "15236763890";
$password = password_hash($password, PASSWORD_DEFAULT);

$query = "insert into administrator(username, password, email, phone, created_at) value('{$username}', '{$password}', '{$email}', '{$phone}', now());";
if (execute_bool($link, $query)) {
    echo "用户添加成功！";
}else{
    echo '用户添加失败，请重试！';
}
