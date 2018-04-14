// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue    from 'vue';
import App    from './App';
import router from './router';
import './vuetouch';
import MuseUI   from 'muse-ui';

import 'muse-ui/dist/muse-ui.css';
import animate from 'animate.css';

import axios from 'axios';

Vue.use(MuseUI);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
