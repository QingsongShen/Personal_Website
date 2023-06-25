 $(document).ready(function (){

    $("input[type='text'],textarea").each(function (){
        // console.log(index)
        // let span = $(this).nextAll(".warning")

        $(this).change(function (){
            // $(".warning:eq(index_1)").hide()
            $(this).nextAll(".warning").hide()
        })
    })

    $("#contact-form").submit(function (){
        let name = $("#name")
        let email = $("#email")
        let comments = $("#comments")


        //数据验证

        //name验证
        if (name.val().trim() === ""){
            let warning = $(".warning:eq(0)")
            warning.text("请输入您的姓名！")
            warning.show()
            name.focus()
            return false
        }
        //email验证
        if (email.val().trim() === "" || !/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(email.val())){
            let warning = $(".warning:eq(1)")
            warning.text("请输入正确的邮箱地址！")
            warning.show()
            email.focus()
            return false
        }
        //text验证
        if (comments.val().trim() === ""){
            let warning = $(".warning:eq(2)")
            warning.text("该字段不能为空！")
            warning.show()
            comments.focus()
            return false
        }

        //将数据传递到后端服务器
        let param = {
            name: name.val(),
            email: email.val(),
            comments: comments.val()
        }
        // let xmlhttp = new XMLHttpRequest()
        // xmlhttp.onreadystatechange=function(){
        //     if (xmlhttp.readyState===4 && xmlhttp.status===200){
        //         alert(xmlhttp.responseText)
        //     }
        // }
        // xmlhttp.open("POST","/admin/contact.php",true)
        // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // xmlhttp.send("param="+param)
        $.ajax({
            type : "POST",
            url : "/admin/contact.php",
            data : param,
            success : function (result){
                alert("信息提交成功！！！")
            },
            error: function (){
                alert("信息提交失败，请稍后再试！！！")
            }
        })

        //清空输入框
        $("input[type='text'],textarea").each(function (){
            $(this).val("")
        })


    })
     //education img
     $(".initial").slick({
         accessibility: true,
         adaptiveHeight: true,
         autoplay: true,
         arrows: false
     })

     $(".verticle-tab a").on("click",function (){
         let id = $(this).attr("href")
         $(id+" .tab-video-bg").slick({
             accessibility: true,
             adaptiveHeight: true,
             autoplay: true,
             arrows: false
         })
         $(".verticle-tab a").not("[href = "+id+"]").each(function (){
                 let another_id = $(this).attr("href")
                 $(another_id+" .tab-video-bg").slick("unslick")
             })

     })


})