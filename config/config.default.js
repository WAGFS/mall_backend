/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615947077504_7942';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 关闭csrf
  exports.security = {
    csrf: false
  };

  // 配置跨域请求
  config.cors = {
    origin:'*',  //暂时配置为允许所有跨域请求
    allowMethods:"GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
    credentials:true
  }

  // 配置秘钥
  config.jwt={
    secret:'coderlc'
  }

  // 配置数据库连接
  config.sequelize = {
    dialect:'mysql',  //确定连接的数据库类型
    database:'mall_db',  //要连接的数据库名
    host:'localhost',  //要连接的数据库域名
    port:3306,
    username:'lc', //数据库用户名
    password:'123456', //密码一定要是字符串
    define:{
      freezeTableName: true,  // 防止修改表名为复数
    }
  }

  // 配置egg监听端口 部署时使用
  // config.culuster = {
  //   listen:{
  //     path:'',
  //     port:'7702',
  //     hostname:'10.0.4.6'
  //   }
  // }

  return {
    ...config,
    ...userConfig,
  };
};
