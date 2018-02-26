import Vue from 'vue'
import App from './App'
import VueGoodWizard from '../dist/vue-good-wizard.cjs'
// import VueGoodWizard from '../src'

Vue.use(VueGoodWizard);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
