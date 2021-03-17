// 引入Controller模块
const {
    Controller
} = require('egg');

// 创建登录控制器
class LoginController extends Controller {
    // 登录验证
    async login(ctx){
        // 获取到用户输入的用户名和密码
        // 去数据库中查找用户是否存在
        const result = await ctx.service.user.userCheck(ctx.request.body);
        if(result){
            console.log(typeof result)
            // 如果有该用户 则生成token
            const token = ctx.app.jwt.sign({result},ctx.app.config.jwt.secret,{expiresIn:'1days'})    
            ctx.body = {
                code:200,
                token,
                data:{
                    result
                }
            }
        }else{
            // 如果没有该用户 则返回异常
            ctx.body = {
                code:400,
                msg:'用户名或密码错误'
            }
        }
    }
}

// 将控制器导出
module.exports = LoginController;