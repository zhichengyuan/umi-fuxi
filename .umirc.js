export default {
        // scripts:[{src:'./a.js'},{src:'./b.js'}],//引入额外的js
        dva:{
          immer: { enableES5: true },//不建议使用
          hmr:true
        },//开启dva
        proxy:{//相当于webpack中的devServer中的proxy配置
          "/api":{
            target:'http://api.duyiedu.com',
            changeOrigin:true //修改源
          }
        }
  };