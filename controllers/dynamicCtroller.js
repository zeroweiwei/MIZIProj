const dynamicDAO = require('../model/dynamicDAO')
module.exports = {
    //获取全部动态
    getTopic: async (ctx,next) => {
        try{
            let jsondata = await dynamicDAO.getTopic();
            console.log(jsondata)
            ctx.body={"code":200,"message":"ok",data:jsondata}
        }catch (e) {
            ctx.body={"code":500,"message":e.toString(),data:[]}
        }
    },
    //获取全部评论
    getDiscuss:async (ctx,next) => {
        try {
            let jsondata = await dynamicDAO.getDiscuss();
            console.log(jsondata)
            ctx.body={"code":200,"message":"ok",data:jsondata}
        }catch (e) {
            ctx.body={"code":500,"message":e.toString(),data:[]}
        }
    },
    //获取全部回复
    getReplay:async (ctx,next) => {
        try {
            let jsondata = await dynamicDAO.getReplay();
            console.log(jsondata)
            ctx.body={"code":200,"message":"ok",data:jsondata}
        }catch (e) {
            ctx.body={"code":500,"message":e.toString(),data:[]}
        }
    },
    //查看我的动态
    getMyTopic:async (ctx,next) => {
        try {
            let jsondata = await dynamicDAO.getMyTopic(ctx.params.users_userId);
            console.log(jsondata)
            ctx.body={"code":200,"message":"ok",data:jsondata}
        }catch (e) {
            ctx.body={"code":500,"message":e.toString(),data:[]}
        }
    },
    //添加一条动态
    addTopic:async (ctx,next) => {
        let topic = {
            tid:ctx.request.body.tid,
            tcontent:ctx.request.body.tcontent,
            tdate:ctx.request.body.tdate,
            admireNum:ctx.request.body.admireNum,
            discuss_did:ctx.request.body.discuss_did,
            users_userId:ctx.request.body.users_userId
        }
        console.log(topic)
        try{
            //2.调用用户数据访问对象的添加方法
            await dynamicDAO.addTopic(topic)
            //3.反馈结果
            ctx.body = {"code":200,"message":"ok",data:[]}
        }catch(e){
            ctx.body = {"code":500,"message":e.toString(),data:[]}
        }
    },
    //添加一条评论
    addDiscuss:async (ctx,next) =>{
        let discuss = {
            did:ctx.request.body.did,
            dcontent:ctx.request.body.dcontent,
            ddate:ctx.request.body.ddate,
            users_userId:ctx.request.body.users_userId
        }
        try{
            //2.调用用户数据访问对象的添加方法
            await dynamicDAO.addDiscuss (discuss)
            //3.反馈结果
            ctx.body = {"code":200,"message":"ok",data:[]}
        }catch(e){
            ctx.body = {"code":500,"message":e.toString(),data:[]}
        }
    },
    //添加一条回复
    addReplay:async (ctx,next) =>{
        let replay = {
            rid:ctx.request.body.rid,
            rcontent:ctx.request.body.rcontent,
            rdate:ctx.request.body.rdate,
            discuss_did:ctx.request.body.discuss_did,
            users_userId:ctx.request.body.users_userId
        }
        try{
            //2.调用用户数据访问对象的添加方法
            await dynamicDAO.addReplay (replay)
            //3.反馈结果
            ctx.body = {"code":200,"message":"ok",data:[]}
        }catch(e){
            ctx.body = {"code":500,"message":e.toString(),data:[]}
        }
    },
    //删除我的动态
    deleteTopic:async (ctx,next) => {
        try {
            let jsondata = await dynamicDAO.deleteTopic(ctx.params.tid,ctx.params.users_userId);
            console.log(jsondata)
            ctx.body = {"code":200,"message":"ok",data:jsondata}
        }catch (e) {
            ctx.body = {"code":500,"message":e.toString(),data:[]}
        }
    },
    //删除我的评论
    deleteDiscuss:async (ctx,next) => {
        try {
            let jsondata = await dynamicDAO.deleteDiscuss(ctx.params.did,ctx.params.users_userId);
            console.log(jsondata)
            ctx.body = {"code":200,"message":"ok",data:jsondata}
        }catch (e) {
            ctx.body = {"code":500,"message":e.toString(),data:[]}
        }
    },
    //删除我的回复
    deleteReplay:async (ctx,next) => {
        try {
            let jsondata = await dynamicDAO.deleteReplay(ctx.params.rid,ctx.params.users_userId);
            console.log(jsondata)
            ctx.body = {"code":200,"message":"ok",data:jsondata}
        }catch (e) {
            ctx.body = {"code":500,"message":e.toString(),data:[]}
        }
    }
}