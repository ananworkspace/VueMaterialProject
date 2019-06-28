import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/index.css"
Vue.use(ElementUI)

Vue.config.productionTip = false;

// 设置导航守卫
router.beforeEach((to,from,next)=>{
  if(to.path=="/login"){
    next()
    return
  }
  // 如果获取令牌则可以跳转到下一个页面，否则留在登录页面
  if(localStorage.getItem("token")){
    next()
  }else{
    router.path("/login")
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
