//关于用户对象的相关数据操作
const DAO = require('../model/DAO')

class DB{
    //获取全部用户信息的方法
    getUsers(){
        return DAO('select * from stuInfo',[]);
    }
    //获取指定编号的用户信息方法
    getOneUser(id){
        return DAO('select * from stuInfo where stuNo = ?',[id]);
    }
    //添加一个用户的信息方法
    addUser(user){
        return DAO('insert into stuInfo values(?,?,?,?,?,?)',
            [user.stuName,user.stuNo,user.stuSex,user.stuAge,user.stuSeat,user.stuAddress])
    }
}
module.exports = new DB();