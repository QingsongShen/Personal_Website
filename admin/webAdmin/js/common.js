// 向缓存中存储数据
function storeData (username, value, token, expirationTime){
    let data = {
        value: value,
        token: token,
        expirationTime: Date.now() + expirationTime
    }
    localStorage.setItem(username, JSON.stringify(data))
}

// 从缓存中获取数据
function getData(username) {
    let data = localStorage.getItem(username);
    if(data) {
        let parsedData = JSON.parse(data);
        if(parsedData.expirationTime >= Date.now()) {
            return parsedData
        }else {
            // 数据已过期，删除数据
            localStorage.removeItem(username)
        }
    }
    return null
}

function setCookie(name, value, hours) {
    let expires = "";
    if (hours) {
        let date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// 校验登录状态
function  checkLogin (okCallback, errorCallback){
    // 获取数据
    let username = getCookie("username")
    let token = getCookie('token')
    // console.log(username,token)
    if (! (username && token)){
        // 用户未登录
        errorCallback()
    }else {
        // 服务端验证
        $.ajax({
            url: "/admin/webAdmin/login.php",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                action: "checkLogin",
                username: username,
                token: token

            },
            success: function (res){
                okCallback(res)
            },
            error: function (res){
                errorCallback(res)
            }
        })
    }
}