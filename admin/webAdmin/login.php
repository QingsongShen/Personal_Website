<?php
include_once ("../config.inc.php");
include_once ("../mysql.inc.php");
header('Content-Type: application/json');




// 开始session会话并建立数据库连接
session_start();
$link = connect();

// 获取参数
$_POST = escape($link, $_POST);


// 测试参数
//$_POST['action'] = 'login';
//$_POST['username'] = 'sqsgoodluck';
//$_POST['password'] = 'Shen198514';



if (isset($_POST['action']) && $_POST['action'] === "login"){
    login($link);
}else if (isset($_POST['action']) && $_POST['action'] === "checkLogin"){
    // 验证session会话信息
    if (isset($_SESSION['sessionExpiration']) && isset($_SESSION['username']) && isset($_SESSION['token'])){
        $sessionExpiration = $_SESSION['sessionExpiration'];
        $username = $_SESSION['username'];
        $token = $_SESSION['token'];

//        var_dump($username,$token);


        // 验证用户端传入的参数
        if (isset($_POST['username']) && isset($_POST['token'])){
            $usernameCK = $_POST['username'];
            $tokenCK = $_POST['token'];
            // 验证用户名和token合法性
            if ($usernameCK === $username && base64_decode($tokenCK) === base64_decode($token) && time() < $sessionExpiration){
                $response = [
                    'login' => 'success',
                    'message' => "用户已登录！"
                ];
                echo json_encode($response, JSON_UNESCAPED_UNICODE);
                http_response_code(200);
            }else {
                $response = [
                    'login' => 'failed',
                    'message' => "用户未登录！"
                ];
                echo json_encode($response, JSON_UNESCAPED_UNICODE);
            }
        }
    }else {
        $response = [
            'login' => 'failed',
            'message' => "用户未登录！"
        ];
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }
}else if(isset($_POST['action']) && $_POST['action'] === "logout") {
    logout();
}



// 用户注销
function logout (){
    session_destroy();
    $response = [
        'isLogin' => false,
        'message' => "用户已登出！"
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE);

}



// 创建用户密码
// $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// 密码验证
//$password = 'mypassword'; // 用户提供的密码
//$storedHash = '...'; // 从数据库中获取的哈希值
//
//if (password_verify($password, $storedHash)) {
//    echo 'Password match';
//} else {
//    echo 'Password does not match';
//}



//if (false){
//    // 创建管理员密码
//    $username = "sqsgoodluck";
//    $password = "";
//    $email = "sqsgoodluck@qq.com";
//    $phone = "15236763890";
//    $password = password_hash($password, PASSWORD_DEFAULT);
//
//    $query = "insert into administrator(username, password, email, phone) value('{$username}', '{$password}', '{$email}', '{$phone}');";
//    if (execute_bool($link, $query)) {
//        echo "用户添加成功！";
//    }else{
//        echo '用户添加失败，请重试！';
//    }
//
//}

// 生成token令牌
function generationToken (){
    return base64_encode(random_bytes(32));  // 生成一个32字节的随机字节序列，并通过base64编码
}

// 登录函数
function login ($link){
    $_POST = escape($link, $_POST);
    $username = $_POST['username'];
    $password = $_POST['password'];
    if($username && $password){
        $queryPassword = "select password from administrator where username like '{$username}';";
        $queryExe = execute($link, $queryPassword);
        // 验证用户是否存在
        if(mysqli_affected_rows($link) === 0){
            $response = [
                'login' => 'failed',
                'errormessage' => '用户名或密码错误！'
            ];
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
        }else {
            $result = mysqli_fetch_all($queryExe);
            if (password_verify($password, $result[0][0])) {
                // 生成身份令牌
                $token = generationToken();
                // 设置token过期时间
                $sessionExpiration = time() +  60 * 60;  // 1小时过期
                // 将登录信息写入会话
                $_SESSION['username'] = $username;
                $_SESSION['token'] = $token;
                $_SESSION['sessionExpiration'] = $sessionExpiration;
                $login = 'success';
                $response = [
                    "login" => $login,
                    'username' => $username,
                    'token' => $token
                ];
//                var_dump($_SESSION);
                echo json_encode($response, JSON_UNESCAPED_UNICODE);
            } else {
                $response = [
                    'login' => 'failed',
                    'errormessage' => '用户名或密码错误！'
                ];
                echo json_encode($response, JSON_UNESCAPED_UNICODE);
            }
        }


    }else{
        $errormessage = "参数错误！";
        echo json_encode($errormessage, JSON_UNESCAPED_UNICODE);
        exit();
    }
}




close($link);



