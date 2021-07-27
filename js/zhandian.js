/*大菜单点击事件*/
function menuId() {
    $(".menuli").click(function() {
        var str = $(this).attr("id") + "-1"; /*获取菜单位置*/
        var strl = $(this).attr("id")
        $("#" + str).show()
        $("#" + str).siblings().hide()
        $("#" + strl).addClass("active") /*菜单背景颜色改变*/
        $("#" + strl).siblings().removeClass("active")
    })
}
/*toggle按钮事件*/
$(document).ready(function() {
    $(".toggle").click(function() {
        var xiala = $(this).parent().attr("id") + "-jizhun"
        $("#" + xiala).show()
        $("#" + xiala).siblings().toggle()
    })
})

var inputObj: {
        web: {
            baidu: {
                action: "https://www.baidu.com/s",
                url: "https://www.baidu.com/",
                inputAttr: { name: "wd" },
                name: "百度搜索",
                params: '<input type="hidden" name="ie" value="utf-8"/>',
                },
            google: {
                action: "https://www.google.com.hk/search",
                url: "https://www.google.com.hk/",
                inputAttr: { name: "q" },
                name: "谷歌搜索",
                params: '<input type="hidden" name="client" value="moe123" disabled=""/><input type="hidden" name="hl" value="zh-CN" disabled=""/><input type="hidden" name="ie" value="utf-8" disabled=""/><input type="hidden" name="newwindow" value="1"/>',
                },
            bing: {
                action: "https://cn.bing.com/search",
                url: "https://cn.bing.com/",
                inputAttr: { name: "q" },
                name: "必应搜索",
                params: '<input type="hidden" name="form" value="moe123"/><input type="hidden" name="pc" value="moe123"/><input type="hidden" name="market" value="zh-cn"/><input type="hidden" name="ie" value="utf-8"/>',
            	},
            sogou: {
                action: "https://www.sogou.com/web",
                url: "https://www.sogou.com/",
                inputAttr: { name: "query" },
                name: "搜狗搜索",
                params: '<input type="hidden" name="ie" value="utf8"/>',
            	},
            youdao: {
                action: "https://www.youdao.com/search",
                url: "https://www.youdao.com/",
                inputAttr: { name: "q" },
                name: "有道搜索",
                params: '<input type="hidden" name="keyfrom" value="moe123"/><input type="hidden" name="ue" value="utf-8"/><input type="hidden" name="vendor" value="moe123"/>',
            	},
            qihoo360: {
                action: "https://www.so.com/s",
                url: "https://www.so.com/",
                inputAttr: { name: "q" },
                name: "360 搜索",
                params: '<input type="hidden" name="ie" value="utf-8"/><input type="hidden" name="src" value="moe123"/>',
            	},
        video: {
            bilibili: {
                action: "https://www.bilibili.com/search",
                url: "https://www.bilibili.com/",
                inputAttr: { name: "keyword" },
                name: "哔哩哔哩搜索",
                params: '<input name="orderby" type="hidden" value=""/>'
            },
            acfun: {
                action: "http://www.acfun.cn/search/",
                url: "http://www.acfun.cn/",
                name: "AcFun 搜索",
                inputAttr: { name: "query" },
                params: ""
            },
            soku: {
                action: "https://www.soku.com/v",
                url: "https://www.soku.com/",
                inputAttr: { name: "keyword" },
                name: "搜库",
                params: "",
            	},
            nico: { action: "https://www.nicovideo.jp/search/", 
            	url: "https://www.nicovideo.jp/", 
            	inputAttr: { name: "s" }, 
            	name: "NicoNico 搜索", 
            	params: "" 
            	},
        community: {
            tieba: {
                action: "https://tieba.baidu.com/f",
                url: "https://tieba.baidu.com/",
                inputAttr: { name: "kw" },
                name: "进入贴吧",
                params: '<input type="hidden" name="ie" value="utf-8"/>',
            	},
        image: {
            pixiv: {
                action: "https://www.pixiv.net/search.php",
                url: "https://www.pixiv.net/",
                inputAttr: { name: "word", placeholder: "输入'illust_id='可浏览作品，'id='可查看作者" },
                name: "PIXIV搜索",
                params: '<input type="hidden" name="s_mode" value="s_tag"/>',
                onSubmit: function(t, i) {
                    var e = t._panel.find(".active .ipt-wr .keyword").val();
                    i = t._panel.find(".active form");
                    if (0 == e.indexOf("illust_id=")) e = e.replace("illust_id=", ""), window.open("https://www.pixiv.net/member_illust.php?mode=medium&illust_id=" + e, "_blank").focus();
                    else if (0 == e.indexOf("id=")) { e = e.replace("id=", ""), window.open("https://www.pixiv.net/member.php?id=" + e, "_blank").focus() } else if ("" != e) return i.attr({ action: "https://www.pixiv.net/search.php", method: "POST" }), !0;
                    return t._panel.find(".active .ipt-wr .keyword").val(""), !1
                }
            },
            baidu: {
                action: "https://image.baidu.com/i",
                url: "https://image.baidu.com/",
                inputAttr: { name: "word" },
                name: "百度图片",
                params: '<input type="hidden" name="ie" value="utf-8"/><input type="hidden" name="tn" value="baiduimage"/>',
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            },
            google: {
                action: "https://images.google.com.hk/images",
                url: "https://images.google.com.hk/",
                inputAttr: { name: "q" },
                name: "谷歌图片",
                params: '<input type="hidden" name="client" value="moe123"/><input type="hidden" name="hl" value="zh-CN"/><input type="hidden" name="ie" value="utf-8"/>',
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            },
            youdao: {
                action: "https://image.youdao.com/search",
                url: "https://image.youdao.com/",
                inputAttr: { name: "q" },
                name: "有道图片",
                params: '<input type="hidden" name="keyfrom" value="moe123"/><input type="hidden" name="ue" value="utf-8"/>',
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            },
            bing: {
                action: "https://cn.bing.com/images/search",
                url: "https://cn.bing.com/",
                inputAttr: { name: "q" },
                name: "必应图片",
                params: '<input type="hidden" name="form" value="moe123"/><input type="hidden" name="pc" value="moe123"/><input type="hidden" name="ie" value="utf-8"/><input type="hidden" name="market" value="zh-cn"/>',
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            },
            qihoo360: {
                action: "https://image.so.com/i",
                url: "https://image.so.com/",
                inputAttr: { name: "q" },
                name: "360 图片",
                params: '<input type="hidden" name="ie" value="utf-8"/><input type="hidden" name="src" value="moe123"/>',
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            }
        },
        music: {
            xiami: {
                action: "https://www.xiami.com/search",
                url: "https://www.xiami.com/",
                inputAttr: { name: "key" },
                name: "虾米音乐",
                params: '<input type="hidden" name="pos" value="1"/>',
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            },
            baidu: { action: "https://music.baidu.com/search", url: "https://www.baidu.com/", inputAttr: { name: "key" }, name: "百度MP3", params: '<input type="hidden" name="ie" value="utf-8"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }
        },
        wiki: {
            moegirl: {
                action: "https://zh.moegirl.org/index.php",
                url: "https://zh.moegirl.org/",
                inputAttr: { name: "search" },
                name: "萌百词条",
                params: '<input type="hidden" name="title" value="Special:搜索"/>',
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            },
            wikipedia: { action: "https://zh.wikipedia.org/w/index.php", url: "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5", inputAttr: { name: "search" }, name: "维基词条", params: '<input type="hidden" name="title" value="Special:搜索"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } },
            bdbaike: { action: "https://baike.baidu.com/search/word", url: "https://baike.baidu.com/", inputAttr: { name: "word" }, name: "百度词条", params: '<input type="hidden" name="ie" value="utf-8"/><input id="sw1" name="pic" type="hidden" value="1"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } },
            komica: { action: "https://wiki.komica.org/index.php", url: "https://wiki.komica.org/", inputAttr: { name: "search" }, name: "Komica Wiki", params: '<input type="hidden" name="title" value="特殊:搜尋"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }
        },
        translate: {
            google: {
                action: "https://translate.google.cn/?hl=en",
                url: "https://translate.google.cn/",
                inputAttr: { name: "text" },
                name: "谷歌翻译",
                params: "",
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            },
            youdao: {
                action: "https://dict.youdao.com/search",
                url: "https://dict.youdao.com/",
                inputAttr: { name: "q" },
                name: "有道词典",
                params: "",
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } }
            },
            baidu: {
                action: "https://fanyi.baidu.com/#en/zh/",
                url: "https://fanyi.baidu.com/",
                inputAttr: { name: "text" },
                name: "百度翻译",
                params: "",
                style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } },
                onSubmit: function(t, i) {
                    var e = t._panel.find(".active .ipt-wr .keyword").val();
                    t._panel.find(".active form");
                    return e = e.replace("illust_id=", ""), window.open("https://fanyi.baidu.com/#en/zh/" + e, "_blank").focus(), t._panel.find(".active .ipt-wr .keyword").val(""), !1
                }
            }






            /*搜索logo点击事件*/
            function subMenuClick() {
                $(".subMenu").click(function() {
                    /*var logo=$(this).attr("id")*/
                    $(this).show()
                    $(this).siblings().hide()
                    /*搜索框填充*/


                })

            }



            $(document).ready(function() {
                menuId();
                subMenuClick();
            })