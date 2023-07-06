<?php
    // 接口说明
        # 1. 根据接受的参数param返回相应的信息
            # 1）getDishList: 返回点餐系统菜品种类及对应的菜品信息
            # 2) getNoticeList: 返回点餐系统通知信息

        # 2. 根据接受的参数param执行相应过程
            # 1) dishModification: 执行菜品修改
            # 2）dishAddition: 执行菜品添加
            # 3) noticeAddition: 执行通知添加
            # 4) noticeDelete: 执行通知删除
            # 5) cateNameDeletion: 删除菜品分类
            # 6) dishDeletion: 删除菜品分类


    header('Content-Type: application/json');
    // 定义接口路径和请求方法
    $requestMethod = $_SERVER['REQUEST_METHOD'];
    $requestPath = $_SERVER['REQUEST_URI'];




    // 测试使用参数
    //-----------------------------------
//        $requestMethod = "POST";
//        $_POST["param"] = "getDishList";
    //-----------------------------------




     // 处理请求参数
    if ($requestMethod === "POST"){
        $param = $_POST['param'];
    }else {
        $errorMessage = '无效访问！！！！';
        $responseData = array('error' => $errorMessage);
        echo json_encode($responseData);
        exit();
    }

    include_once ("../config.inc.php");
    include_once ("../mysql.inc.php");

    # 数据库连接
    $link = connect(DB_HOST,DB_USER,DB_PASSWORD,"dishes",DB_PORT);

    if ($param === "getDishList"){
        # 数据库查询
        $queryDishes = "SELECT c.id, c.cateName, CONCAT('[', GROUP_CONCAT(JSON_OBJECT('id', d.id, 'title', d.dishName, 'img', d.imgSrc, 'description', d.description, 'price', d.price, 'select', d.count) SEPARATOR ','), ']') AS items, c.active
        FROM dishCate c
        LEFT JOIN dishItem d ON c.id = d.fatherId
        GROUP BY c.id, c.cateName;";
        $result = mysqli_fetch_all(execute($link, $queryDishes),MYSQLI_ASSOC);
        foreach ($result as $i){
            $i['items'] = json_decode($i['items'], true);
        }
        $result = json_encode($result, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES|JSON_NUMERIC_CHECK);
        $result = str_replace('"[', '[', $result);
        $result = str_replace(']"', ']', $result);
        $result = stripslashes($result);

        echo $result;
    }elseif ($param === "getNoticeList"){
        $queryNotice = "select * from notice;";
        $result = mysqli_fetch_all(execute($link, $queryNotice), MYSQLI_ASSOC);
        $result = json_encode($result, JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
        echo $result;
    }elseif ($param === "noticeAddition"){
        $newNotice = $_POST['newNotice'];
        if (!$newNotice) {
            $errorMessage = "通知内容不能为空！";
            echo json_encode($errorMessage, JSON_UNESCAPED_UNICODE);
            exit();
        }else{
            $newNotice = escape($link, $newNotice);
            $query = "insert into notice(content, creationTime) value('{$newNotice}', now());";
            if(execute_bool($link, $query)){
                echo json_encode("通知添加成功！", JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode("通知添加失败，请重试！", JSON_UNESCAPED_UNICODE);
            };
        }
    }else if($param === "noticeDelete"){
        $id = $_POST["index"];
        if(!$id){
            $errorMessage = "请求不合法！";
            echo json_encode($errorMessage);
            exit();
        }else{
            $query = "delete from notice where id = {$id};";
            if(execute_bool($link, $query)){
                echo json_encode("通知删除成功！", JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode("通知删除失败，请重试！", JSON_UNESCAPED_UNICODE);
            };
        }
    }else if ($param === "dishModification") {
        $id = escape($link, $_POST["id"]);
        $dishName = escape($link, $_POST["dishName"]);
        $description = escape($link, $_POST["description"]);
        $imgSrc = escape($link, $_POST["imgSrc"]);
        $price = escape($link, $_POST["price"]);
        $fatherId = escape($link, $_POST["fatherId"]);
        if (! $dishName && $description && $imgSrc && $price && $fatherId){
            $errorMessage = "参数不合法！！！";
            echo json_encode($errorMessage, JSON_UNESCAPED_UNICODE);
            exit();
        }else{
            $query = "update dishItem set 
                    dishName = '{$dishName}', 
                    description = '{$description}', 
                    imgSrc = '{$imgSrc}',
                    price = '{$price}'
                    where id = {$id}";
            if(execute_bool($link, $query)){
                echo json_encode("菜品信息修改成功！", JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode("菜品信息修改失败，请重试！", JSON_UNESCAPED_UNICODE);
            };
        }

    }else if($param === "dishAddition"){
        $cateSelect = escape($link, $_POST['cateSelect']);
        $cateName = escape($link, $_POST['cateName']);
        $dishName = escape($link, $_POST['dishName']);
        $imgSrc = escape($link, $_POST['imgSrc']);
        $description = escape($link, $_POST['description']);
        $price = escape($link, $_POST['price']);

        if ($cateName && $dishName && $imgSrc && $description && $price ){    // 非空校验
            if($cateSelect === $cateName){     // 新分类校验
                $fatherId = escape($link, $_POST['fatherId']);
                $query = "insert into dishItem(dishName, imgSrc, description, price, fatherId) 
                        value('{$dishName}', '{$imgSrc}', '{$description}', {$price}, {$fatherId});";
                if(execute_bool($link, $query)){
                    echo json_encode("菜品添加成功！", JSON_UNESCAPED_UNICODE);
                }else{
                    echo json_encode("菜品添加失败，请重试！", JSON_UNESCAPED_UNICODE);
                };
            }else{
                // 添加新分类
                $query = <<<str
                    insert into dishCate(cateName) values('{$cateName}');
                    insert into dishItem(dishName, imgSrc, description, price, fatherId) 
                        select '{$dishName}', '{$imgSrc}', '{$description}', {$price}, d.id 
                        from dishCate d 
                        where d.cateName = '{$cateName}';
                str;
                if(execute_multi_bool($link, $query)){
                    echo json_encode("菜品分类及菜品添加成功！", JSON_UNESCAPED_UNICODE);
                }else{
                    echo json_encode("菜品分类或菜品添加失败，请刷新后重试！", JSON_UNESCAPED_UNICODE);
                };

            }
        }else {
            $errorMessage = "参数不合法！！！";
            echo json_encode($errorMessage, JSON_UNESCAPED_UNICODE);
            exit();
        }

    }else if($param === "cateNameDeletion"){
        if($id = escape($link, $_POST['id'])){
            $query = "delete from dishCate where id = {$id};";
            if(execute_bool($link, $query)){
                echo json_encode("菜品分类删除成功！", JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode("菜品分类删除失败，请重试！", JSON_UNESCAPED_UNICODE);
            };
        }else {
            $errorMessage = "参数不合法！！！";
            echo json_encode($errorMessage, JSON_UNESCAPED_UNICODE);
            exit();
        }

    }else if($param === "dishDeletion"){
        // 执行菜品删除
        $id = escape($link, $_POST["id"]);
        if ($id){
            $query = "delete from dishItem where id = {$id};";
            if(execute_bool($link, $query)){
                echo json_encode("菜品删除成功！", JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode("菜品删除失败，请重试！", JSON_UNESCAPED_UNICODE);
            };
        }else{
            $errorMessage = "参数不合法！！！";
            echo json_encode($errorMessage, JSON_UNESCAPED_UNICODE);
            exit();
        }
    }

