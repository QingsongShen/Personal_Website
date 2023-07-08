$(function (){
    'use strict'

    // 判断登录状态
    checkLogin(function (res){
        console.log(res)
        if (res.login === "success"){
            alert("您已登录，点击确认跳转...")
            window.location.href = "./index.html"
        }
    }, function (){
        console.log(new Date())
    })





    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })






    // 登录函数
    // 获取表格数据
    $("#login").on("submit", function (){

        $("#error").html("")
        setTimeout(function (){
            let username = $("#userName").val()
            let password = $("#password").val()

            // 登录
            $.ajax({
                url: "./login.php",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                dataType: "json",
                data: {
                    action: "login",
                    username: username,
                    password: password
                },
                success: function (res){
                    if (res.login === 'success'){
                        let username = res.username
                        let token = res.token
                        // 设置cookie
                        setCookie('username', username, 1)
                        setCookie('token', token, 1)

                        $("#error").html("登陆成功，正在跳转...")
                        window.location.href = "./index.html"
                    }else {
                        // console.log("用户名或密码错误，请重试...")
                        $("#error").html("用户名或密码错误，请重试...")
                        return false
                    }
                },
                error: function (res){

                }
            })
        },1000)
    })














})