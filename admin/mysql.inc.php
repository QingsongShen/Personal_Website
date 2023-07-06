<?php 

//数据库连接
function connect($host=DB_HOST,$user=DB_USER,$password=DB_PASSWORD,$database=DB_DATABASE,$port=DB_PORT){
	$link = mysqli_connect($host,$user,$password,$database,$port);
	//若连接错误，返回相关信息
	if (!$link){
		exit(mysqli_connect_error());
	}
	//设置默认字符集
	mysqli_set_charset($link,"utf8");
	return $link;
}


//执行SQL语句，返回结果集对象或者返回布尔值
function execute($link,$query){
	$result = mysqli_query($link,$query);
	if (mysqli_errno($link)){
		exit(mysqli_error($link));
	}
	return $result;
}

function execute_bool($link,$query){
	$bool = mysqli_real_query($link,$query);
	if (mysqli_errno($link)){
		exit(mysqli_error($link));
	}
	return $bool;
}

// 批量执行SQL语句
function execute_multi($link, $query){
    if (mysqli_multi_query($link, $query)) {
        do {
            /* 储存第一个结果集 */
            if ($result = mysqli_store_result($link)) {
                while ($row = mysqli_fetch_row($result)) {
                    printf("%s\n", $row[0]);
                }
                // 释放结果集内存
                mysqli_free_result($result);
            }
            /* print divider */
            if (mysqli_more_results($link)) {
                printf("-----------------\n");
            }
        } while (mysqli_next_result($link));
    }
};

function execute_multi_bool($link, $query){
    if (! mysqli_multi_query($link, $query)){
        return false;
    }
    // 移动到下一个结果集，直到没有更多结果集为止
    while (mysqli_next_result($link)) {
        // 继续移动到下一个结果集
    }
    return true;
};




//数据入库之前进行转义，确保数据能够顺利入库
function escape($link,$data){
    if(is_string($data)){
        return mysqli_real_escape_string($link,$data);
    }elseif (is_array($data)){
        foreach ($data as $key=>$val){
            $data[$key] = escape($link,$val); //使用递归处理可能出现的多维数组
        }
        return $data;
    }
}

//关闭数据库的连接
/*
 * 正常情况下，函数内部对形参的操作不会影响到实际参数的值；
 * 但如果向PHP函数中传递的参数为对象，则并不是把对象复制一份传给函数，而是把对象本身传递给函数，相当于按引用传递参数（&）；
 */
function close($link){
    mysqli_close($link);
}