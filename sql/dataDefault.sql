use dishes;
# 添加菜品分类
insert into dishCate(cateName) values("家常小炒");
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("酸辣土豆丝", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E5%9C%9F%E8%B1%86%E4%B8%9D.jpg", "酸辣香甜，脆爽可口！！", 999, 1);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("红烧茄子", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酥软香醇，色香俱佳！", 999, 1);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("2红烧茄子", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酥软香醇，色香俱佳！", 999, 1);

insert into dishCate(cateName) values("主食担当");
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("火腿青豆炒饭", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg", "粒分明，咸淡刚好", 999, 2);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("五常大米", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸辣香甜，崔爽可口！！", 999, 2);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("番茄鸡蛋面", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸辣香甜，崔爽可口！！", 999, 2);

insert into dishCate(cateName) values("零食甜点");
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("小蛋糕", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg", "粒分明，咸淡刚好", 999, 3);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("泡芙", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸辣香甜，崔爽可口！！", 999, 3);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("巧克力曲奇", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸曲奇曲奇，崔爽可口！！", 999, 3);


insert into dishCate(cateName) values("可口饮料");
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("雪碧", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg", "粒分明，咸淡刚好", 999, 4);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("王老吉", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸辣香甜，崔爽可口！！", 999, 4);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("蒙牛纯甄", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸曲奇曲奇，崔爽可口！！", 999, 4);


insert into dishCate(cateName) values("佐食小菜");
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("酸黄瓜", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg", "粒分明，咸淡刚好", 999, 5);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("海带丝", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸辣香甜，崔爽可口！！", 999, 5);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("萝卜条", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸曲奇曲奇，崔爽可口！！", 999, 5);


insert into dishCate(cateName) values("清香糕点");
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("蛋黄派", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg", "粒分明，咸淡刚好", 999, 6);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("绿豆糕", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸辣香甜，崔爽可口！！", 999, 6);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("窝窝头", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸曲奇曲奇，崔爽可口！！", 999, 6);


insert into dishCate(cateName) values("油炸快乐");
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("薯条", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg", "粒分明，咸淡刚好", 999, 7);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("炸鸡", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸辣香甜，崔爽可口！！", 999, 7);
insert into dishItem(dishName, imgSrc, description, price, fatherId) 
	value("汉堡包", "http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg", "酸曲奇曲奇，崔爽可口！！", 999, 7);
    

# 添加通知信息
insert into notice(content, creationTime) value("欢迎光临小恐龙美食铺，很高兴为您服务！", now());
insert into notice(content, creationTime) value("本店仅支持张雪纯下单使用，其他人恕不接待~", now());
insert into notice(content, creationTime) value("本店支持床头投喂功能~", now());



















