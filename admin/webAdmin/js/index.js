$(function () {

    // 验证登录状态
    checkLogin(function (res){
        if(res.login === "success"){
            return true
        }else {
            window.location.href = "./login.html"
            return false
        }
    }, function (){
        window.location.href = "./login.html"
    })


    // 注销登录
    $("#logout").on("click", function (){
        $.ajax({
            url: "./login.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                action: "logout"
            },
            success: function (res){
                // console.log(res)
                window.location.href = "./login.html"
            },
            error: function (res){
                console.log(res)
            }
        })
    })





    /*#########################################################################*/
    /*######################### 处理简历留言信息 ################################*/
    /*#########################################################################*/
    async function getComments(){
        const response = await fetch("/admin/webAdmin/getComment.php", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            body: "param=getComments"
        })
        if (response.ok){
            let commentsList = await response.json()

            // 渲染模板
            let templateCommentWrapper = Handlebars.compile($("#template-commentWrapper").html())({commentsList})
            $("#commentWrapper").html(templateCommentWrapper)

            $("#commentWrapper").off("click", "tr").on("click", "tr", function (){
                let id = $(this).data("id")
                let index = commentsList.findIndex(obj => {return obj.id === id})
                let item = commentsList[index]
                // 点击留言框弹出详情提示
                let templateModal = {
                    cancelId: "confirmDeal",    // 左侧按钮重置为确定
                    confirmId: "cancelDeal",  // 右侧按钮重置为取消
                    item: item,
                    title: "留言详情",
                    cancelButton: "我已知晓并确认",
                    confirmButton: "返回"
                }
                let modal = Handlebars.compile($("#templateInfoModal").html())(templateModal)
                $("#modalWrapper").html(modal)
                $("#staticBackdrop").modal("show")
                $(document).on("click", "#confirmDeal", async  function () {
                    $("#staticBackdrop").modal("hide")
                    // 发送HTTP请求
                    let res = await fetch("/admin/webAdmin/getComment.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: new URLSearchParams({
                            param: "dealComment",
                            id: id
                        })
                    })
                    if (! res.ok){
                        throw new Error("HTTP请求失败: " + res.status)
                    }else {
                        alert(await res.json())
                        // 刷新列表
                        getComments()
                    }


                })
                $(document).on("click", "#cancelDeal", function (){
                    $("#staticBackdrop").modal("hide")
                    return false
                })
            })
        }
    }
    getComments()





    /*#########################################################################*/






    /*#########################################################################*/
    /*######################## 定义全局变量/函数 ################################*/
    /*#########################################################################*/
    const url = "/admin/miniProgram/getDishes.php"

    /*#########################################################################*/

    // 处理问候语
    let hour = (new Date()).getHours()
    let welcomeMessage
    if (hour >= 0 && hour < 6) {
        welcomeMessage = "夜深了，早点休息："
    } else if (hour >= 6 && hour < 12) {
        welcomeMessage = "早上好："
    } else if (hour >= 12 && hour < 13) {
        welcomeMessage = "中午好："
    } else if (hour >= 13 && hour < 18) {
        welcomeMessage = "下午好："
    } else if (hour >= 18 && hour < 24) {
        welcomeMessage = "晚上好："
    }
    $("#welcome-message-content").html(welcomeMessage)
    // 渲染modal提示框

    function modalRender(data) {
        let modalTemplate = Handlebars.compile($("#templateModal").html())(data);
        $("#modalWrapper").html(modalTemplate);
    }

    // 刷新bootstrap
    function refreshBootstrap() {
        const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
        dataSpyList.forEach(dataSpyEl => {
            bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
        })
    }

    // 清空所有输入框
    function resetInputValue(){
        $("#dish-title-select").html('<option value="" disabled selected hidden>请选择菜品名称</option>')
        // 清空描述输入框、图片链接、价格中默认值
        $("#dish-cate-input").val("")
        $("#dish-title-input").val("")
        $("#dish-description").val("")
        $("#dish-image").val("")
        $("#dish-price").val("")

        // 清空添加form
        $("#dishAdd-cate-input").val("")
        $("#dishAdd-title-input").val("")
        $("#dishAdd-description").val("")
        $("#dishAdd-image").val("")
        $("#dishAdd-price").val("")
    }

    /*#########################################################################*/
    /*####################### 渲染处理餐厅通知页面 ################################*/
    /*#########################################################################*/
    // 更新餐厅通知
    async function updateNoticeList() {
        $.ajax({
            url: url,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                param: "getNoticeList"
            },
            dataType: "json",
            success: function (noticeList) {

                let templateNoticeList = Handlebars.compile($("#template-notice-list").html())({noticeList})
                $("#dishNoticeList").html(templateNoticeList)

                // 给按钮绑定删除时间
                $("#dishNoticeList button").on("click", function () {
                    let index = $(this).data("index");
                    let nowNotice = $(this).closest("tr").find("span").text().trim();
                    console.log(nowNotice)
                    modalRender({
                        cancelId: "cancelDeletion",
                        confirmId: "confirmDeletion",
                        title: "删除确认",
                        content: "你确定要删除通知" + "：【" + nowNotice + "】吗?",
                        cancelButton: "取消",
                        confirmButton: "删除"
                    })
                    $("#staticBackdrop").modal("show")
                    $("#confirmDeletion").on("click", function () {
                        $("#staticBackdrop").modal("hide")
                        $.ajax({
                            url: url,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                param: "noticeDelete",
                                index: index
                            },
                            dataType: "json",
                            success: function (res) {
                                alert(res)
                                updateNoticeList();  // 刷新通知栏

                            },
                            error: function (res) {
                                alert(res)
                                updateNoticeList();  // 刷新通知栏
                            }
                        })
                    })
                })

                // 绑定添加通知函数
                $("#newNoticeForm").on("submit", function () {
                    let newNotice = $("#newNotice").val()

                    // 发送ajax请求
                    $.ajax({
                        url: url,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        dataType: "json",
                        data: {
                            param: "noticeAddition",
                            newNotice: newNotice
                        },
                        success: function (res){
                            alert(res)
                            $("#newNotice").val("")
                            // 刷新DOM
                            updateNoticeList()
                        },
                        error: function (){
                            alert(res)
                        }

                    })
                })

            },
            error: function () {
                alert("请求失败！")
            }

        })

    }

    // 渲染页面
    updateNoticeList();

    /*#########################################################################*/

    // 处理左侧导航条加载对应content
    $(".nav-control a").on("click", function () {
        // 获取指向id
        let target = $(this).data("target")

        // 添加或删除active属性
        $(".nav-control a").removeClass("active")
        $(this).addClass("active")


        // 隐藏或展示右侧项目
        $(".navContent").each(function () {
            if (!$(this).hasClass("d-none")) {
                $(this).addClass("d-none")
            }
        })
        $("#" + target).removeClass("d-none")

        // 刷新bootstrap
        refreshBootstrap()
    })


    /*#########################################################################*/
    /*####################### 渲染处理菜品信息页面 ################################*/
    /*#########################################################################*/

    // 获取服务器信息
    async function getDishList(){
        try {
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                body: (new URLSearchParams({
                    param: "getDishList"
                })).toString()
            })
            if (! response.ok) {
                throw new Error("HTTP请求错误：" + response.status);
            }else{
                return await response.json()
            }

        }
        catch (error) {
            console.log(error)
        }

    }

    // 刷新DOM信息
    async function refreshDishInfoDom(bindDelete){
         let dishList =  await getDishList().then(dishList => {
            // 渲染cateName展示列表
            let templateDishCate = Handlebars.compile($("#template-dishCate").html())({dishList})
            $("#dishCate").html(templateDishCate)

            // 渲染dishList展示列表
            let templateDishItems = Handlebars.compile($("#template-dishItems").html())({dishList})
            $("#dishItems").html(templateDishItems)

            // 渲染菜品修改项目 => 第一个下拉框
            let templateDishCateSelect = Handlebars.compile($("#template-dishCate-select").html())({dishList})
            $("#dish-cate-select").html(templateDishCateSelect)

            // 渲染菜品添加项目 => 第一个下拉框
            $("#dishAdd-cate-select").html(templateDishCateSelect)
            return dishList

        })

        if (bindDelete){
            // 绑定菜品删除函数
            $("#dishItems").on("click", "BUTTON" ,async function (){
                let id = $(this).data("index")
                let dishName = $(this).data("dishname")
                // 弹出确认框
                let templateData = {
                    cancelId: "cancelDeletion",
                    confirmId: "confirmDeletion",
                    title: "删除确认",
                    content: "您正尝试删除菜品：【" + dishName + "】，是否继续删除？",
                    cancelButton: "取消",
                    confirmButton: "确认"
                }
                let data = new URLSearchParams({
                    param: "dishDeletion",
                    id: id
                })
                modalRender(templateData)
                $("#staticBackdrop").modal("show")
                $(document).on("click", "#confirmDeletion", async  function () {
                    $("#staticBackdrop").modal("hide")
                    // 发送HTTP请求
                    let response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: data.toString()
                    })
                    if(! response.ok){
                        throw new Error("HTTP请求失败：" + response.status)
                    }else {
                        alert(await response.json())
                        // 刷新DOM
                        await $("#dishItems").off("click", "BUTTON" )
                        await refreshDishInfoDom(true)
                        refreshBootstrap()

                    }
                })
                $(document).on("click", "#cancelDeletion", function (){
                    $("#staticBackdrop").modal("hide")
                    return false
                })


            })

            // 绑定菜品分类删除函数
            $("#dishCate").on("click", "BUTTON", function (){
                let id = $(this).data("index")
                let cateName = $(this).data("catename")
                // 弹出确认框
                let templateData = {
                    cancelId: "cancelDeletion",
                    confirmId: "confirmDeletion",
                    title: "警告",
                    content: "您正尝试删除菜品分类：【" + cateName + "】，该操作会伴随删除该分类下的所有菜品。是否继续删除？",
                    cancelButton: "取消",
                    confirmButton: "确认"
                }
                let data = new URLSearchParams({
                    param: "cateNameDeletion",
                    id: id
                })
                modalRender(templateData)
                $("#staticBackdrop").modal("show")
                $(document).on("click", "#confirmDeletion", async  function () {
                    $("#staticBackdrop").modal("hide")
                    // 发送HTTP请求
                    let response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: data.toString()
                    })
                    if(! response.ok){
                        throw new Error("HTTP请求失败：" + response.status)
                    }else {
                        alert(await response.json())
                        // 刷新DOM
                        await refreshDishInfoDom(true)
                        refreshBootstrap()

                    }
                })
                $(document).on("click", "#cancelDeletion", function (){
                    $("#staticBackdrop").modal("hide")
                    return false
                })

            })

        }




        // 返回dishList
        return dishList
    }

    refreshDishInfoDom(true)

    // 绑定修改菜品函数
    async function dishInfoModification(){
        const dishList = await refreshDishInfoDom(false)

        // 监听菜品分类下拉变化 => 第一个下拉框
        await $("#dish-cate-select").on("change", function() {
            // 向该下拉输入框中填值
            let cateSelectValue = $(this).val()
            $("#dish-cate-input").val(cateSelectValue)
            // $(dishTitleInput).val("")
            // 渲染第二个select结构
            let index = dishList.findIndex((obj) => {
                return obj.cateName === cateSelectValue
            })
            let item = dishList[index]
            // 渲染菜品修改第二个下拉框数据
            let templateDishItemSelect = Handlebars.compile($("#template-dishItem-select").html())({item})
            $("#dish-title-select").html(templateDishItemSelect)

            // 清空描述输入框、图片链接、价格中默认值
            $("#dish-title-input").val("")
            $("#dish-description").val("")
            $("#dish-image").val("")
            $("#dish-price").val("")
        })

        // 监听菜品名称下拉 => 第二个下拉框
        await $("#dish-title-select").on("change", function() {
            // 获取items指定索引
            let cateSelectValue = $("#dish-cate-select").val()
            let index = dishList.findIndex((obj) => {
                return obj.cateName === cateSelectValue
            })
            let item = dishList[index]
            let fatherId = item.id
            let itemSelectValue = $(this).val()
            $("#dish-title-input").val(itemSelectValue)
            let dishIndex = item.items.findIndex((obj) => {
                return obj.title === itemSelectValue
            })
            let dish = item.items[dishIndex]
            let id = dish.id      // 获取dish的ID

            $("#dish-description").val(dish.description)
            $("#dish-image").val(dish.img)
            $("#dish-price").val(dish.price)

            // 移除之前绑定的submit事件处理程序
            // let dishModificationForm = $("#dishModificationForm")
            // $(dishModificationForm).off("submit");

            // 执行菜品修改
        })

        // 执行菜品修改程序
        $("#dishModificationForm").on("submit", async function (){
            let cate = $("#dish-cate-select").val()
            let selectTitle = $("#dish-title-select").val()
            let title = $("#dish-title-input").val()
            let description = $("#dish-description").val()
            let img = $("#dish-image").val()
            let price = $("#dish-price").val()

            // 获取菜品fatherID
            let index = dishList.findIndex(obj => {
                return obj.cateName === cate
            })
            let fatherId = dishList[index].id
            // 获取菜品ID
            let id = dishList[index].items[dishList[index].items.findIndex(obj => {return obj.title === selectTitle})].id
            let data = new URLSearchParams({
                param: "dishModification",
                id: id,
                fatherId: fatherId,
                dishName: title,
                description: description,
                imgSrc: img,
                price: price
            })
            // 发送修改请求
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: data.toString()
            })
            if (! response.ok){
                throw new Error("HTTP请求错误：" + response.status+ "   ")
            }else {
                alert(await response.json())
            }

            // 清空输入框
            resetInputValue()
            // 刷新DOM
            await  refreshDishInfoDom(true)
            refreshBootstrap()
        })


    }
    dishInfoModification()

    // 绑定菜品添加函数
    async function dishAddition(){
        const dishList = await refreshDishInfoDom(false)

        // 监听菜品分类框变化
        await $("#dishAdd-cate-select").on("change", function () {
            let dishAddSelectValue = $(this).val()
            $("#dishAdd-cate-input").val(dishAddSelectValue)
        })

        // 提交修改
        $("#dishAdditionForm").on("submit", async function (){
            // 获取输入值
            let cateSelect = $("#dishAdd-cate-select").val()
            let cateInput = $("#dishAdd-cate-input").val()
            let dishName = $("#dishAdd-title-input").val()
            let imgSrc = $("#dishAdd-image").val()
            let description = $("#dishAdd-description").val()
            let price = $("#dishAdd-price").val()

            // 判断是否添加新的分类
            if (cateInput !== cateSelect){
                let data = new URLSearchParams({
                    param: "dishAddition",
                    cateSelect: cateSelect,
                    cateName: cateInput,
                    dishName: dishName,
                    imgSrc: imgSrc,
                    description: description,
                    price: price
                })

                // 弹出确认框
                let templateData = {
                    cancelId: "cancelAddition",
                    confirmId: "confirmAddition",
                    title: "系统提示",
                    content: "您似乎在添加菜品时选择了一个新的菜品分类项目，该项目为：【" + cateInput + "】，是否继续添加？",
                    cancelButton: "取消",
                    confirmButton: "确认"
                }
                modalRender(templateData)
                $("#staticBackdrop").modal("show")
                $(document).on("click", "#confirmAddition", async  function (){
                    $("#staticBackdrop").modal("hide")
                    // 执行添加程序（含新分类）
                    let response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: data
                    })
                    if (! response.ok){
                        throw new Error("HTTP请求错误：" + response.status+ "   ")
                    }else {
                        alert(await response.json())
                    }
                    // 清空输入框
                    resetInputValue()
                    // 刷新DOM
                    await refreshDishInfoDom(true)
                    refreshBootstrap()
                })
                $(document).on("click", "#cancelAddition", function (){
                    $("#staticBackdrop").modal("hide")
                    return false
                })

            }else{   // 无新分类
                let fatherId = dishList[dishList.findIndex(obj => {
                    return obj.cateName === cateInput
                })].id
                let data = new URLSearchParams({
                    param: "dishAddition",
                    cateSelect: cateSelect,
                    cateName: cateInput,
                    dishName: dishName,
                    imgSrc: imgSrc,
                    description: description,
                    price: price,
                    fatherId: fatherId
                })
                // 执行普通添加程序（不添加新的菜品分类）
                let response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: data.toString()
                })
                if (! response.ok){
                    throw new Error("HTTP请求错误：" + response.status+ "   ")
                }else {
                    alert(await response.json())
                    // 刷新DOM
                    await refreshDishInfoDom(true)
                    refreshBootstrap()
                }
                // 清空输入框
                resetInputValue()


            }



        })

    }
    dishAddition()


    /*#########################################################################*/


})



/*#########################################################################*/