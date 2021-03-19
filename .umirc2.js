export default {
    routes: [
      {
        path: '/',
        component: '../layouts/index.js',
        exact:false,
        routes:[
          {path:'/',component:'./index',title:'首页1',
          Routes:['./src/routes/HandleTitle.js']
        },
          {path:'/login',component:'./login',title:'登录页'},
          {path:'/welcome',component:'./welcome',title:'欢迎页',
          Routes:['./src/routes/PrivateRouter.js','./src/routes/HandleTitle.js']}
        ]
      },
    ],
  };