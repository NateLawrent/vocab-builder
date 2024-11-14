import Vue from 'vue';
import App from './App.vue';
import router from './route.js';

import 'semantic-ui-css/semantic.css'; // Import Semantic UI CSS

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
