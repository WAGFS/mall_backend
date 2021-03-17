module.exports = app =>{
    app.beforeStart(async()=>{
        // await app.model.sync({force:true})  //每次重启服务器都会清空数据库中的内容
        // 将model中的表全部写入数据库
        await app.model.sync()
    })
}