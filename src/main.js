import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store';
import ApiService from './common/api.service';
Vue.use(Vuelidate)
Vue.config.productionTip = false
ApiService.init();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
