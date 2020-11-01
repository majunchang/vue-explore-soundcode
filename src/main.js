// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import Vue from "../vueSoundCode/Vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
let vm = new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

setTimeout(() => {
  console.log(vm);
}, 1000);
