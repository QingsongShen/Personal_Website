(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        OPDR: function(t, i) {
            var e = {
                jsonIndexOf: function(t, i) {
                    var e, a = 0;
                    for (e in t) {
                         if (e == i) return a;
                        a++
                    }
                    return -1
                },
                jsonNumbericKey: function(t, i) {
                    var e, a = 0;
                    for (e in t) {
                        if (a == i) return { key: e, val: t[e] };
                        a++
                    }
                    return null
                },
                shuffle: function(t) { for (var i, e, a = t.length; 0 !== a;) e = Math.floor(Math.random() * a), i = t[a -= 1], t[a] = t[e], t[e] = i; return t }
            };
            t.exports = e
        },
        kMWZ: function(t, i) {
            t.exports = {
                toolbar: {


                	
                    web: { 
                    	baidu: { action: "https://www.baidu.com/s", 
                    	url: "https://www.baidu.com/",
                    	 inputAttr: { name: "wd" }, 
                    	 name: "百度搜索", 
                    	 params: '<input type="hidden" name="ie" value="utf-8"/>',
                    	 style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } 
                    	}}, 
                    	google: { action: "https://www.google.com.hk/search", url: "https://www.google.com.hk/", inputAttr: { name: "q" }, name: "谷歌搜索", params: '<input type="hidden" name="client" value="moe123" disabled=""/><input type="hidden" name="hl" value="zh-CN" disabled=""/><input type="hidden" name="ie" value="utf-8" disabled=""/><input type="hidden" name="newwindow" value="1"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }, bing: { action: "https://cn.bing.com/search", url: "https://cn.bing.com/", inputAttr: { name: "q" }, name: "必应搜索", params: '<input type="hidden" name="form" value="moe123"/><input type="hidden" name="pc" value="moe123"/><input type="hidden" name="market" value="zh-cn"/><input type="hidden" name="ie" value="utf-8"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }, sogou: { action: "https://www.sogou.com/web", url: "https://www.sogou.com/", inputAttr: { name: "query" }, name: "搜狗搜索", params: '<input type="hidden" name="ie" value="utf8"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }, youdao: { action: "https://www.youdao.com/search", url: "https://www.youdao.com/", inputAttr: { name: "q" }, name: "有道搜索", params: '<input type="hidden" name="keyfrom" value="moe123"/><input type="hidden" name="ue" value="utf-8"/><input type="hidden" name="vendor" value="moe123"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }, qihoo360: { action: "https://www.so.com/s", url: "https://www.so.com/", inputAttr: { name: "q" }, name: "360 搜索", params: '<input type="hidden" name="ie" value="utf-8"/><input type="hidden" name="src" value="moe123"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } } },
                    video: { bilibili: { action: "https://www.bilibili.com/search", url: "https://www.bilibili.com/", inputAttr: { name: "keyword" }, name: "哔哩哔哩搜索", params: '<input name="orderby" type="hidden" value=""/>' }, acfun: { action: "http://www.acfun.cn/search/", url: "http://www.acfun.cn/", name: "AcFun 搜索", inputAttr: { name: "query" }, params: "" }, soku: { action: "https://www.soku.com/v", url: "https://www.soku.com/", inputAttr: { name: "keyword" }, name: "搜库", params: "", style: { ".ipt-wr": { width: "429px" }, ".ipt-wr > .keyword": { width: "420px" }, ".btn-wr": { width: "77px" }, ".btn-wr > input": { width: "77px" } } }, nico: { action: "https://www.nicovideo.jp/search/", url: "https://www.nicovideo.jp/", inputAttr: { name: "s" }, name: "NicoNico 搜索", params: "" } },
                    community: { tieba: { action: "https://tieba.baidu.com/f", url: "https://tieba.baidu.com/", inputAttr: { name: "kw" }, name: "进入贴吧", params: '<input type="hidden" name="ie" value="utf-8"/>', style: { ".m-toolbar-search-logo a": { "margin-left": "10px" }, ".toggle": { display: "none" }, ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } } },
                    image: {
                        pixiv: {
                            action: "https://www.pixiv.net/search.php",
                            url: "https://www.pixiv.net/",
                            inputAttr: { name: "word", placeholder: "输入'illust_id='可浏览作品，'id='可查看作者" },
                            name: "PIXIV搜索",
                            params: '<input type="hidden" name="s_mode" value="s_tag"/>',
                            style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } },
                            onSubmit: function(t, i) {
                                var e = t._panel.find(".active .ipt-wr .keyword").val();
                                i = t._panel.find(".active form");
                                if (0 == e.indexOf("illust_id=")) e = e.replace("illust_id=", ""), window.open("https://www.pixiv.net/member_illust.php?mode=medium&illust_id=" + e, "_blank").focus();
                                else if (0 == e.indexOf("id=")) { e = e.replace("id=", ""), window.open("https://www.pixiv.net/member.php?id=" + e, "_blank").focus() } else if ("" != e) return i.attr({ action: "https://www.pixiv.net/search.php", method: "POST" }), !0;
                                return t._panel.find(".active .ipt-wr .keyword").val(""), !1
                            }
                        },
                        baidu: { action: "https://image.baidu.com/i", url: "https://image.baidu.com/", inputAttr: { name: "word" }, name: "百度图片", params: '<input type="hidden" name="ie" value="utf-8"/><input type="hidden" name="tn" value="baiduimage"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } },
                        google: { action: "https://images.google.com.hk/images", url: "https://images.google.com.hk/", inputAttr: { name: "q" }, name: "谷歌图片", params: '<input type="hidden" name="client" value="moe123"/><input type="hidden" name="hl" value="zh-CN"/><input type="hidden" name="ie" value="utf-8"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } },
                        youdao: { action: "https://image.youdao.com/search", url: "https://image.youdao.com/", inputAttr: { name: "q" }, name: "有道图片", params: '<input type="hidden" name="keyfrom" value="moe123"/><input type="hidden" name="ue" value="utf-8"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } },
                        bing: { action: "https://cn.bing.com/images/search", url: "https://cn.bing.com/", inputAttr: { name: "q" }, name: "必应图片", params: '<input type="hidden" name="form" value="moe123"/><input type="hidden" name="pc" value="moe123"/><input type="hidden" name="ie" value="utf-8"/><input type="hidden" name="market" value="zh-cn"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } },
                        qihoo360: { action: "https://image.so.com/i", url: "https://image.so.com/", inputAttr: { name: "q" }, name: "360 图片", params: '<input type="hidden" name="ie" value="utf-8"/><input type="hidden" name="src" value="moe123"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }
                    },
                    music: { xiami: { action: "https://www.xiami.com/search", url: "https://www.xiami.com/", inputAttr: { name: "key" }, name: "虾米音乐", params: '<input type="hidden" name="pos" value="1"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }, baidu: { action: "https://music.baidu.com/search", url: "https://www.baidu.com/", inputAttr: { name: "key" }, name: "百度MP3", params: '<input type="hidden" name="ie" value="utf-8"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } } },
                    wiki: { moegirl: { action: "https://zh.moegirl.org/index.php", url: "https://zh.moegirl.org/", inputAttr: { name: "search" }, name: "萌百词条", params: '<input type="hidden" name="title" value="Special:搜索"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }, wikipedia: { action: "https://zh.wikipedia.org/w/index.php", url: "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5", inputAttr: { name: "search" }, name: "维基词条", params: '<input type="hidden" name="title" value="Special:搜索"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }, bdbaike: { action: "https://baike.baidu.com/search/word", url: "https://baike.baidu.com/", inputAttr: { name: "word" }, name: "百度词条", params: '<input type="hidden" name="ie" value="utf-8"/><input id="sw1" name="pic" type="hidden" value="1"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } }, komica: { action: "https://wiki.komica.org/index.php", url: "https://wiki.komica.org/", inputAttr: { name: "search" }, name: "Komica Wiki", params: '<input type="hidden" name="title" value="特殊:搜尋"/>', style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } } },
                    translate: {
                        google: { action: "https://translate.google.cn/?hl=en", url: "https://translate.google.cn/", inputAttr: { name: "text" }, name: "谷歌翻译", params: "", style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } },
                        youdao: { action: "https://dict.youdao.com/search", url: "https://dict.youdao.com/", inputAttr: { name: "q" }, name: "有道词典", params: "", style: { ".ipt-wr": { width: "409px" }, ".ipt-wr > .keyword": { width: "400px" }, ".btn-wr": { width: "97px" }, ".btn-wr > input": { width: "97px" } } },
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
                    }
                },
                layout: [{ name: "首页", layout: "overview", wide: "true" }, { name: "资讯版", icon: "/static/img/rss.png", layout: "feed", wide: "true" }, { name: "P站日榜", icon: "/static/img/pixiv.png", layout: "pic", url: "https://www.pixiv.net/" }, { name: "摸鱼网", icon: "https://www.google.cn/s2/favicons?domain=www.mooyuu.com", redirect: "https://www.mooyuu.com/" }, { name: "B站相簿", icon: "https://www.google.cn/s2/favicons?domain=h.bilibili.com", redirect: "https://h.bilibili.com/" }, { name: "站长博客", icon: "http://moe48.moe/favicon.ico", redirect: "http://moe48.moe" }, { name: "路线图", icon: "https://www.google.cn/s2/favicons?domain=www.trello.com", redirect: "/kanban" }, { name: "自定义", icon: "/static/img/settings.png", layout: "settings" }],
                theme: { list: [{ id: "2019_fall", bg: "/static/img/xingzi_illust/top_page/2019_fall_tsukiusa.jpg", title: "秋季印象图", url: "https://weibo.com/3441211922/I9bPad8II", new_theme: !0 }, { id: "2019_summerfall", bg: "/static/img/xingzi_illust/top_page/2019_summerfall_sharloc.jpg", title: "秋夏印象图", url: "https://www.weibo.com/3949612939/I6D5ExxT6", new_theme: !0 }, { id: "2019_spring", bg: "https://asset.static.moe123.net/imgs/cd1cba12gy1g25prf762vj214a0ju7ai.jpg", title: "春季印象图", url: "https://www.weibo.com/5563225468/Hp1G0prhN" }, { id: "2019_happy_new_year", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2019_feicha_new_years.jpg", title: "～2019新年快乐～", url: "https://www.weibo.com/3441211922/HetnR57Om" }, { id: "2018_kyoko_x_mas", bg: "https://asset.static.moe123.net/imgs/cd1cba12gy1fyh2qeacn9j20z00jgncq.jpg", title: "叮叮当叮叮当，杏儿响叮当，预祝圣诞快乐🎄", url: "https://weibo.com/3441211922/H8C1P5L1G" }, { id: "2018_kyoko_birthday", bg: "https://asset.static.moe123.net/imgs/005zWjpngy1fvcm05o9eoj30z00jgq71.jpg", title: "🎂9.16 萌导航6岁啦", url: "https://weibo.com/3441211922/GzMvuERsj" }, { id: "2018_kyoko_summer2", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2018_feicha_summer.jpg", title: "🎐摇曳夏日，即将结束的八月", url: "https://www.weibo.com/u/3922112217" }, { id: "2018_kyoko_summer", bg: "https://asset.static.moe123.net/imgs/005zWjpngy1fug3bmruo0j30z00jg7bs.jpg", title: "✨舞动于星间的少女", url: "https://www.weibo.com/u/5662532774" }, { id: "2018_kyoko_valentines_day", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2018_harrymiao_valentine_day.jpg", title: "2.14 Happy Valentine's Day!", url: "https://weibo.com/3441211922/G34GNBIhG" }, { id: "2018_kyoko_spring", bg: "https://asset.static.moe123.net/imgs/005zWjpngy1fpi82teqb0j30z00imaf6.jpg", title: "春。(点击查看作画过程)", url: "https://weibo.com/3922112217/G86esCUQW" }, { id: "2018_kyoko_spring_new_year", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2018_sharloc_new_years_1.jpg", title: "狗年快乐！祝大家新年旺旺不要汪汪汪", url: "https://www.weibo.com/3441211922/G3ni6cxQI" }, { id: "2017_kyoko_birthday", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2017_harrymiao_9_6_birthday.jpg", title: "9.16 萌导航与杏子已陪伴大家五年了哦", url: "https://weibo.com/3441211922/Fm5hNDy0P?ref=home" }, { id: "2017_kyoko_summer", bg: "https://asset.static.moe123.net/imgs/a15b4afegy1fhibl2f2wgj20z00jp48t.jpeg", title: "吶，要不要一起去海边 ❤️❤️❤️（戳画师微博", url: "https://www.weibo.com/33paradox" }, { id: "2017_kyoko_happy_new_year", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1fbttp8frtsj20z00jpwj6.jpeg", title: "2017 · 新年快乐", url: "https://www.pixiv.net/member.php?id=9049611" }, { id: "2016_kyoko_birthday", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2016_harrymiao_9_6_birthday_1.jpg", title: "🍰 🎂 9.16 萌导航 x 杏子生日快乐 🎂🍰", url: "https://www.pixiv.net/member.php?id=3830028" }, { id: "2016_kyoko_shadow_warrior", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f7e20ub1stj20z00hn11j.jpeg", title: "东方幻想《影武者》，你有一枚“无邪”未领取", url: "https://ywz.q1.com" }, { id: "2016_kyoko_nono", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f609ndupw6j20y60icdp7.jpeg", title: "立即预约《诺诺来自异世界》(´ ˘ `๑)♡", url: "https://nono.2144.cn/appoint/index" }, { id: "2016_kyoko_happy_new_year", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9rma9dmj20y60icjzg.jpeg", title: "五福临门，猴年猴赛雷 (2016)", url: "https://elfartworld.com/works/92098/" }, { id: "2015_kyoko_xmas", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9s27q3rj20wd0g40y7.jpeg", title: "迟到的圣诞礼物 (2015)", url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=54603903" }, { id: "2015_kyoko_gacha", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2015_4seasons_gacha.jpg", title: "网易二次元社区GACHA，“戳我”发现新大陆！(2015)", url: "https://gacha.163.com/discover/" }, { id: "2015_kyoko_linovel", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9s0axatj20wd0fsq8s.jpeg", title: "华语最强轻小说APP～轻库娘等你抱回家 (2015)️", url: "https://www.linovel.com/" }, { id: "2015_mlk_moe123", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9txy35dj20y60icjxc.jpeg", title: "～梅露可物语～ 愈术士与铃之旋律 (2015)", url: "https://mlk.qijee.com/" }, { id: "2015_kyoko_zjtx_kongming", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9uivreuj20y60hvag9.jpeg", title: "战姬天下，杏子&萌娘诸葛亮等你加入！(2015)", url: "https://zjtx.qijee.com/" }, { id: "2015_kyoko_happy_new_year", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9ryp618j20y60icwlo.jpeg", title: "三羊生瑞气，百鸟唤春光：羊年大吉！(2015)", url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=48740017" }, { id: "2014_2015_kyoko_winter", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2014_nerv110_winter.jpg", title: "冬季主题 (2014 - 2015) ", url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=48120584" }, { id: "2014_mirugo_nanami_kyoko_hanabi", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9vmbognj20y60hv78g.jpeg", title: "Mirugo联动~林杏子与娜娜米 (2014)", url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=46697384" }, { id: "2014_zhongqiu", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5sbyd8kccj20y60i2482.jpeg", title: "杏子祝大家中秋快乐 (2014)", url: "https://www.pixiv.net/member.php?id=4122676" }, { id: "2014_mirugo_nanami_vs_kyoko", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9voi7tij20y60hvn1l.jpeg", title: "Mirugo联动~超级看板娘大战 (2014)", url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=46694260" }, { id: "2014_aki_vv", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9scv5lcj20y60hsadf.jpeg", title: "食欲之秋！小伙伴们也要注意节食哟~♥ (2014)", url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=46514635" }, { id: "2014_oking", bg: "https://asset.static.moe123.net/imgs/xingzi_illust/top_page/2013_okingjo_xingzi_library.jpg", title: "林杏子的读书时间 (2014)", url: "https://www.pixiv.net/member.php?id=1731567" }, { id: "2014_summer_saru", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9sb94c9j20y60hvn3i.jpeg", title: "死库水也没什么不好www (2014)", url: "https://www.pixiv.net/member.php?id=1422579" }, { id: "2014_summer_vv", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9sfl60oj20y60hvtem.jpeg", title: "夏季新版上线 (2014)", url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=43498526" }, { id: "2014_rrrr", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9rj596dj20y60hs7bd.jpeg", title: "新年贺图 (2014)", url: "https://weibo.com/208383193" }, { id: "2013_nerv110", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9rgyli3j20y60gogr3.jpeg", title: "夏季主题壁纸 (2013)", url: "https://www.pixiv.net/member.php?id=323383" }, { id: "2013_nerv110_start", bg: "https://asset.static.moe123.net/imgs/a15b4afegw1f5s9rf3d7lj20y60i2449.jpeg", title: "看板娘林杏子 (2013)", url: "https://www.pixiv.net/member.php?id=323383" }], interval: 16e3 }
            }
        },
        ntMR: function(t, i, e) {
            var a = e("OPDR"),
                n = (e("je13"), function(t, i) { this._container = $(t), this._provider = i.toolbar, this._defCat = a.jsonNumbericKey(this._provider, 0).key, this._init() });
            n.prototype = {
                _autoCompleteXHRCache: null,
                _container: null,
                _tab: null,
                _panel: null,
                _defCat: "web",
                _provider: null,
                checkCatSub: function(t, i) { return -1 != a.jsonIndexOf(this._provider, t) && -1 != a.jsonIndexOf(this._provider[t], i) },
                _init: function() {
                    var t = this;
                    for (var i in this._shortcut = $(".m-shortcut"), $("body").click(this._bindClick()), this._tab = this._container.find(".tab"), this._panel = this._container.find(".panel"), this._tab.children("li").click(this._bindTabClick()), this._provider)
                        for (var e in this._provider[i]) {
                            var n = $("<a class='" + e + "' category='" + e + "'>" + e + "</a>");
                            this._panel.find("li[category=" + i + "] .opt-wr .m-toolbar-provider").append(n), n.click(this._bindChangeSub())
                        }
                    this._panel.find("li .opt-wr .toggle").click(this._bindToggle()), this._panel.find("li .ipt-wr .keyword").attr("name", ""), this.checkCatSub($.cookie("moe123_toolbar_cat"), $.cookie("moe123_toolbar_sub")) ? (this._tab.children("li").removeClass("active"), this._tab.children("li[category=" + $.cookie("moe123_toolbar_cat") + "]").addClass("active"), this._panel.children("li").removeClass("active"), this._panel.children("li[category='" + $.cookie("moe123_toolbar_cat") + "']").addClass("active"), this.changeSub($.cookie("moe123_toolbar_cat"), $.cookie("moe123_toolbar_sub"))) : this.changeSub(this._defCat, a.jsonNumbericKey(this._provider[this._defCat], 0).key), this._panel.find("li .ipt-wr .keyword").on("input", this._bindInput()), this._panel.find("li form").submit(this._bindSubmit()), this._panel.find("li .ipt-wr .keyword").autocomplete({
                        appendTo: this._container,
                        lookup: function(i, e) {
                            if (t._autoCompleteXHRCache) try { t._autoCompleteXHRCache.abort() } catch (t) { console.error(t) } t._autoCompleteXHRCache = $.ajax({
                                url: "https://suggestion.baidu.com/su",
                                method: "get",
                                jsonp: "cb",
                                dataType: "jsonp",
                                data: { wd: i },
                                success: function(t) {
                                    var i = { suggestions: [] };
                                    t.hasOwnProperty("s") && (i.suggestions = t.s.map(function(t) { return { value: t, data: t } })), e(i)
                                }
                            })
                        }
                    })
                },
                _bindInput: function() { var t = this; return function() { t._panel.find(".active .ipt-wr input").val() } },
                _bindSubmit: function() {
                    var t = this;
                    return function(i) {
                        var e = t._panel.find(".active .opt-wr .m-toolbar-search-logo > a").attr("class"),
                            a = t._provider[t._defCat][e],
                            n = t._panel.find(".active .ipt-wr .keyword");
                        return window.ga && ga("send", "pageview", "/search?search_type=" + t._defCat + "&search_provider=" + e + "&keyword=" + encodeURIComponent(n.val())), a.hasOwnProperty("onSubmit") ? a.onSubmit(t) : !("" == n.val())
                    }
                },
                _bindChangeSub: function() {
                    var t = this;
                    return function(i) {
                        var e = t._panel.children(".active").attr("category"),
                            a = $(this).attr("category");
                        t.checkCatSub(e, a) && (t.changeSub(e, a), t._bindToggle()())
                    }
                },
                changeSub: function(t, i) {
                    var e = this._provider[t][i];
                    if (e) {
                        for (var a in this._panel.find(".active form").attr("action", e.action), e.method ? this._panel.find(".active form").attr("method", e.method) : this._panel.find(".active form").attr("method", "GET"), e.formName ? this._panel.find(".active form").attr("name", e.formName) : this._panel.find(".active form").attr("name", ""), this._panel.find(".active .params").html(e.params), this._panel.find(".active .ipt-wr .keyword").attr(e.inputAttr), this._panel.find(".active .opt-wr .m-toolbar-search-logo > a").attr("class", i).attr("href", e.url).html(i), this._panel.children(".active").find("*").attr("style", ""), e.style) this._panel.children(".active").find(a).css(e.style[a]);
                        this._panel.find(".active .btn-wr .search").attr("value", e.name), $.cookie("moe123_toolbar_cat", t), this._defCat = t, $.cookie("moe123_toolbar_sub", i), $("input").placeholder()
                    }
                },
                _bindToggle: function() {
                    var t = this;
                    return function(i) {
                        var e = t._panel.find(".active .opt-wr");
                        e.hasClass("open") ? e.removeClass("open") : e.addClass("open")
                    }
                },
                _bindClick: function() {
                    var t = this;
                    return function(i) {
                        t._panel.find(".active .opt-wr .m-toolbar-provider");
                        var e = $(i.target).parent().attr("class");
                        if ("toggle" != $(i.target).attr("class") && "m-toolbar-provider" != e) {
                            var a = t._panel.find(".active .opt-wr");
                            a.hasClass("open"), a.removeClass("open")
                        }
                    }
                },
                _bindTabClick: function() {
                    var t = this;
                    return function(i) {
                        t._tab.children("li").removeClass("active"), $(this).addClass("active");
                        var e = $(this).attr("category");
                        t._panel.find(".active .keyword").val(""), t._panel.children("li").removeClass("active"), t._panel.children("li[category='" + e + "']").addClass("active"), t._panel.find("li .ipt-wr .keyword").attr("name", ""), t.changeSub(e, a.jsonNumbericKey(t._provider[e], 0).key)
                    }
                }
            }, t.exports = n
        },
        o3BX: function(t, i, e) {
            var a = e("kMWZ");
            new(e("ntMR"))("#toolbarContainer", a)
        }
    },
    [
        ["o3BX", 0, 1]
    ]
]);