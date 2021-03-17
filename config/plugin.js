'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 配置跨域
  cors:{
    enable:true,
    package:'egg-cors'
  },

  // 配置token
  jwt:{
    enable:true,
    package:'egg-jwt'
  },

  // 配置ORM
  sequelize:{
    enable:true,
    package:'egg-sequelize'
  },
};
