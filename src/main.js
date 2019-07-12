import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueAxios from "vue-axios";
import axios from "axios";
import "swiper/dist/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);
Vue.use(vueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
