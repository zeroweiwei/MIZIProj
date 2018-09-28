// 获取动态模块全部内容
const DAO = require('../model/DAO')
//关于动态对象的相关数据操作
class DynamicDB{
    //获取全部动态的方法
    getTopic() {
        return DAO('call getTopic;', []);
    }
    //获取全部评论的方法
    getDiscuss() {
        return DAO('call getDiscuss;', []);
    }
    //获取全部回复的方法
    getReplay() {
        return DAO('call getReplay;', []);
    }

    //查看我的动态的方法
    getMyTopic(users_userId){
        return DAO('call getMyTopic(?);',[users_userId])
        // return DAO ('select * from topic where users_userId=?',[users_userId])
    }

    //添加我的一条动态的方法
    addTopic(topic){
        return DAO('insert into topic values(?,?,?,?,?,?)',
            [   topic.tid,
                topic.tcontent,
                topic.tdate,
                topic.admireNum,
                topic.discuss_did,
                topic.users_userId
        ])
    }
    //添加一条评论的方法
    addDiscuss(discuss){
        return DAO('insert into discuss values(?,?,?,?)',
            [   discuss.did,
                discuss.dcontent,
                discuss.ddate,
                discuss.users_userId
            ])
    }
    //添加一条回复的方法
    addReplay(replay){
        return DAO('insert into replay values(?,?,?,?,?)',
            [   replay.rid,
                replay.rcontent,
                replay.rdate,
                replay.discuss_did,
                replay.users_userId
            ])
    }

    //删除我的动态的方法
    deleteTopic(tid,users_userId) {
        return DAO('delete from topic where tid=? and users_userId=?',[tid,users_userId])
    }
    //删除我的评论的方法
    deleteDiscuss(did,users_userId) {
        return DAO('delete from discuss where did=? and users_userId=?',[did,users_userId])
    }
    //删除我的回复的方法
    deleteReplay(rid,users_userId) {
        return DAO('delete from replay where rid=? and users_userId=?',[rid,users_userId])
    }

}

module.exports = new DynamicDB();