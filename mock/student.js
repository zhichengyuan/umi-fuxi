import Mock from 'mockjs'
//导出的是数据模拟的配置
//该文件会被umi.js读取

var result = Mock.mock({
    msg:'查询成功',
    status:'success',
    "data|10":[{
        name:'@cname',
        address:'@city', 
        appkey:/demo\d{2}_\d{10}/,
        "birth|1980-200":0,
        'ctime|1554000020-15589766363':0,
        email:'@email',
        "id|+1":0,
        phone:/1\d{10}/,
        sNo:/[1-9]\d{5}/,
        'sex|1':[0,1],
        'utime|1554000020-15589766363':0,
    }]
})
console.log(result)
export default {
    "GET /api/student/findAll":{
        msg:'查询成功',
        status:'success',
        data:result
    }
}