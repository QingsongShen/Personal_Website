function stringToHex(str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
        if (val == "")
            val = str.charCodeAt(i).toString(16);
        else
            val += "," + str.charCodeAt(i).toString(16);
    }
    return val;
}

function hexToString(str) {
    var val = "";
    var arr = str.split(" ");
    for (i = 0; i < arr.length; i++) {
        val += String.fromCharCode(parseInt(arr[i], 16));
    }
    return val;
}

var str = "53 68 65 6e 31 39 38 35 31 34";
var pdw = hexToString(str);

function jiami() {
    var password = "";
    password = prompt('请输入本页面访问密码：', '');
    if (password == pdw) {
        alert("欢迎查看沈青松个人简历，祝生活愉快！")
    } else {
        alert("密码错误，点击确定退出！")
        window.opener = null;
        window.close();
    }
}