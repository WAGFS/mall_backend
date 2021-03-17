// 导出模型
module.exports = app => {
    // 导入需要用到的数据类型
    const {STRING,TEXT,INTEGER} = app.Sequelize;
    // 创建数据模型
    const User = app.model.define('user',{
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username:STRING,
        password:TEXT,
        email:{
            type:STRING(64),
            unique:true,  //唯一
            allowNull:false, //不允许为空
            comment:'邮箱地址' //字段说明
        },
        avatar:STRING(255) //存储头像地址
    })

    // 将模型返回
    return User;
}