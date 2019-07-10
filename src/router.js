import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/login.vue")
    },
    {
      path: "/index",
      name: "Index",
      component: () => import("./views/index.vue")
    },
    {
      path: "*",
      redirect: "/index"
    },
    {
      path: "/detail/:uid",
      name: "Detail",
      component: () => import("./views/detail.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin ? true : false;
  if (to.path == "/login") {
    next();
  } else {
    if (isLogin) {
      next();
    } else {
      next("/login");
    }
  }
});
export default router;
