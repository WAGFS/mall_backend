// 导入service模块
const {Service} = require('egg');

// 创建服务类
class UserService extends Service{
    async userCheck(userInfo){
        const {ctx} = this;
        try{
            const user = await ctx.app.model.User.findOne({
                where:{
                 username:userInfo.username,
                 password:userInfo.password
                }
             })
             // 如果查询到该用户
             return user ? user : false ;
        }catch(e){
            throw new Error(e)
        }
    }
}

// 导出服务类
module.exports = UserService;