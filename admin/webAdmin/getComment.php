<?php

// 接口说明
# 1. 根据接受的参数param进行相应处理
    # 1）getComments: 获取评论列表
    # 2) dealComment: 标记评论为处理状态

header('Content-Type: application/json');
include_once ("../config.inc.php");
include_once ("../mysql.inc.php");

// 定义接口路径和请求方法
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestPath = $_SERVER['REQUEST_URI'];


$link = connect();

// 处理请求参数
$_POST = escape($link, $_POST);
if ($requestMethod === "POST"){
    $param = $_POST['param'];
}else {
    $errorMessage = '无效访问！！！！';
    $responseData = array('error' => $errorMessage);
    echo json_encode($responseData);
    exit();
}




if ($_POST['param'] === 'getComments'){
    $query = "select * from message;";
    $result = mysqli_fetch_all(execute($link, $query), MYSQLI_ASSOC);
    $result = json_encode($result, JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
    echo $result;
}else if ($param === "dealComment"){
    $id = $_POST['id'];
    if (!$id) {
        $errorMessage = "参数不合法！！！";
        echo json_encode($errorMessage, JSON_UNESCAPED_UNICODE);
        exit();
    }else{
        $query = "update message set isProcessed = 1, dealTime = now() where id = {$id};";
        if (execute_bool($link, $query)) {
            echo json_encode("评论处理成功！", JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode("处理失败，请稍后重试！", JSON_UNESCAPED_UNICODE);
        }
    }
}else{
    $errorMessage = "参数不合法！！！";
    echo json_encode($errorMessage, JSON_UNESCAPED_UNICODE);
    exit();
}


// 关闭数据库链接
close($link);