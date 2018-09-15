var userDAO = require('../model/userDAO')
module.exports = {
    addUser:async (ctx,next) => {
        //1.收集数据
        let user = { };
        user.stuName = 'tom'
        user.stuNo = 's001'
        user.stuSex = '男'
        user.stuAge = 20
        user.stuSeat = 10
        user.stuAddress = '仁爱路1号'
        try{
            //2.调用用户数据访问对象的添加方法
            await userDAO.addUser(user)
            //3.反馈结果
            ctx.body = {"code":200,"message":"ok",data:[]}
        }catch(err){
            ctx.body = {"code":500,"message":err.toString(),data:[]}
        }
    }
}