/*导航条二级菜单*/
$(document).ready(function(){
	$(".menu-choice span").click(function(){
		/*上面选择标签时用类选择器，不要用ID选择器，不知道为啥*/
		$(this).parent().find("ul").removeClass("menu-choice-sub")
		$(".menu-choice-sub").slideUp()
		$(this).siblings().slideToggle(500);
		$(this).parent().find("ul").addClass("menu-choice-sub")
	})
})

/*导航条分时间固定*/
/*function htmlScroll() {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if (elFix.data_top < top) {
            elFix.style.position = 'fixed';
            elFix.style.top = 0;
            elFix.style.left = elFix.data_left;
        }
        else {
            elFix.style.position = 'static';
        }
    }
    function htmlPosition(obj) {
        var o = obj;
        var t = o.offsetTop;
        var l = o.offsetLeft;
        while (o = o.offsetParent) {
            t += o.offsetTop;
            l += o.offsetLeft;
        }
        obj.data_top = t;
        obj.data_left = l;
    }
    var oldHtmlWidth = document.documentElement.offsetWidth;
    window.onresize = function () {
        var newHtmlWidth = document.documentElement.offsetWidth;
        if (oldHtmlWidth == newHtmlWidth) {
            return;
        }
        oldHtmlWidth = newHtmlWidth;
        elFix.style.position = 'static';
        htmlPosition(elFix);
        htmlScroll();
    }
    window.onscroll = htmlScroll;

    var elFix = document.getElementById('daohang');
    htmlPosition(elFix);*/



/*相册*/
 $(document).ready(function(){ 
　　var src = $(".picture-suo-img img").eq(0).attr('src');
	$('.showImg').attr('src', src);
}); 
/* 点击图片展示图时显示弹窗查看大图窗口*/
$(document).ready(function(){
    $(".suo-image").click(function(){
        //获取选择缩略图的标题
        var title= $(this).parent().siblings(".suo-title").find("p").html();
        $(".picture-title").children().html(title);
        //打开image-viewer
        $(".image-viewer-bg").css("display","block")
        $(".picture").css("display","block");
    })
})
/*点击×弹窗关闭image-viewer*/
$(document).ready(function(){
    $(".close").click(function(){
        $(".image-viewer-bg").css("display","none")
        $(".picture").css("display","none")
    })
})
/*获取弹窗缩略图地址传递到左侧形成大图*/
$(document).ready(function(){
    $(".picture-suo-img img").each(function(){
        $(this).click(function(){
            var dz=$(this).attr("src")
             $(".showImg").attr("src",dz)
        })
    }) 
    //缩略图切换
    $(".picture-suo-img").click(function(){
        $(this).siblings(".suo-img").removeClass("suo-img")
        $(this).addClass("suo-img")
    }) 
})

/*点击加载下一张缩略图*/
$(document).ready(function(){
    $(".xia").click(function(){    
        var next=$(".suo-img").removeClass("suo-img").next().addClass("suo-img")      
        /*var next = $(".suo-img").removeClass("suo-img").eq($(".picture-suo-img").index(this)).next().addClass('suo-img');*/
        var src = next.children('img').attr('src');
        $('.showImg').attr('src', src);
        /*判断如果是最后一张图则切换到下一页第一张图*/
        var s = $(".suo-img").index()
        console.log(s);
        if (s<0) {
            var i=$(".suo-list").css("display")
            if (i=="block") {
                var next1=$(".suo-list").css("display","none").next().css("display","block")
                var src=next1.children("img").attr("src")
                $(".showImg").attr("src",src)

              /*  var next1 = $(".yeshu").parent().parent().siblings(this).css("display","none").eq($(".suo-list").siblings().index(this)).css("display","block")*/
                

            }
           




           /* var n=$
            if (n=="block") {
                $(".yeshu").text("2/5");
                var next1=$(".yeshu").parent().parent().siblings(this).css("display","none").eq($(".suo-list").siblings().index(this)).css("display","block").children(".picture-suo-img:first-child").addClass("suo-img");
                var src= next1.children("img").attr("src");
                $(".showImg").attr("src",src);
            }else{
                $(".yeshu").text("1/5")
                var prev1=$
            }*/


        }





    })
    



})


