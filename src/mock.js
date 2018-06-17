// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// 数据库字段定义
const  DIARY_USERS = 'diary_users';
// 返回数据对象定义，status状态码 200 表示成功，500表示失败，data为返回数据
const resObj = {
    status : 200,
    data : {}
}

// title: Random.csentence(5, 30), //  Random.csentence( min, max )
// thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
// author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
// date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
// mock一组数据
const postUser = function(param) {
    let bodyParam = JSON.parse(param.body);
    let users = JSON.parse(window.localStorage.getItem(DIARY_USERS) || '{}');
    let user = null;
    if(users.hasOwnProperty(bodyParam.name)){
        let user =  users[bodyParam.name];
        if(user.name  == bodyParam.name && user.password  == bodyParam.password){
            resObj.status = 200;
            resObj.data = bodyParam;
        }else{
            resObj.status = 500;
            resObj.data = {msg:'请求出错啦！！！'};           
        }
    }else{
        users[bodyParam.name] = bodyParam;
        window.localStorage.setItem(DIARY_USERS,JSON.stringify(users));
        resObj.status = 200;
        resObj.data = bodyParam;
    }
    return {resObj}
}

const getUser = function() {
    let users = [];
    let userCount = parseInt(Math.random() * 8) +1;
    for(let i=0; i<userCount; i++){
        users.push({
            id : Random.id(),
            name : Random.cname(),
            topUrl : Random.dataImage('300x250', 'mock的图片'),
            position: Random.ctitle(2, 6) +'攻城狮',
            date : Random.date() + ' ' + Random.time(),
            count : parseInt(Math.random() * 100),
            precount : parseInt(Math.random() * 100),
        });
    }
    return users;
}

const getDiary = function() {
    let diarys = [];
    for(let i=0; i<10; i++){
        diarys.push({
            id : Random.id(),
            isImportant : Math.random()<0.5 ?true:false,
            date : Random.date() + ' ' + Random.time(),
            decs : Random.csentence(30, 400)
        });
    }
    return diarys;
}
// Mock.mock( url, post/get , 返回的数据)；
// 日志信息
Mock.mock('/getDiary', 'get', getDiary);
// 用户信息
Mock.mock('/getUser', 'get', getUser);
// 登陆
Mock.mock('/login', 'post', postUser);