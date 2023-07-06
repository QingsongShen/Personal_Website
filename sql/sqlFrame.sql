#################################################
############## 创建餐厅数据库 #####################
#################################################

### 创建菜品数据库
create database dishes;
use dishes;

### 创建菜品分类表
# DROP table dishCate
create table dishCate (
	id int primary key auto_increment,
    cateName varchar(20),
    active tinyint default 0
);
DESC dishCate;
select * from dishCate;

### 创建菜品表
# DROP table dishItem
create table dishItem (
	id int primary key auto_increment,
    dishName varchar(20),
    imgSrc varchar(200),
    description varchar(100),
    price double,
    count int default 0,
    fatherId int,
    constraint dishRelation 
    foreign key(fatherId) 
    references dishCate(id)
    on update cascade
    on delete cascade
);
DESC dishItem;
select * from dishItem;

# 创建餐厅通知表
# DROP table notice
create table notice(
	id int primary key auto_increment,
    content varchar(30),
    creationTime datetime
);
DESC notice;
select * from notice order by creationTime desc;





#################################################
############## 创建简历数据库 #####################
#################################################
create database sqs;
# name,email,comments,time
use sqs;

# 创建留言信息表
# drop table message;
create table message(
	id int primary key auto_increment,
    name varchar(40),
    email varchar(100),
    comments text,
    isProcessed int default 0,
    createTime datetime,
    dealTime datetime
);
desc message;
select * from message;

# 创建管理员表
# drop table administrator;
create table administrator(
	id INT AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	phone VARCHAR(20),
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
desc administrator;
select * from administrator;










