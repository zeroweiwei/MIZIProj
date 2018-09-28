const router = require('koa-router')()
const dynamicCtroller = require('../controllers/dynamicCtroller')
router.prefix('/dynamic')

//获取全部动态
router.get('/AllTopic',async(ctx,next)=>{
    await dynamicCtroller.getTopic(ctx,next)
})
//获取全部评论
router.get('/AllDiscuss',async(ctx,next)=>{
    await dynamicCtroller.getDiscuss(ctx,next)
})
//获取全部回复
router.get('/AllReplay',async(ctx,next)=>{
    await dynamicCtroller.getReplay(ctx,next)
})

//查看我的动态
router.get('/GetMyTopic/:users_userId',async(ctx,next)=>{
    await dynamicCtroller.getMyTopic(ctx,next)
})
//添加一条动态
router.post('/AddTopic',async(ctx,next)=>{
    await dynamicCtroller.addTopic(ctx,next)
})
//添加一条评论
router.post('/AddDiscuss',async(ctx,next)=>{
    await dynamicCtroller.addDiscuss(ctx,next)
})
//添加一条回复
router.post('/AddReplay',async(ctx,next)=>{
    await dynamicCtroller.addReplay(ctx,next)
})

//删除我的动态
router.delete('/DeleteTopic/:tid/:users_userId',async(ctx,next)=>{
    await dynamicCtroller.deleteTopic(ctx,next)
})
//删除我的评论
router.delete('/DeleteDiscuss/:did/:users_userId',async(ctx,next)=>{
    await dynamicCtroller.deleteDiscuss(ctx,next)
})
//删除我的回复
router.delete('/DeleteReplay/:rid/:users_userId',async(ctx,next)=>{
    await dynamicCtroller.deleteReplay(ctx,next)
})

module.exports = router
