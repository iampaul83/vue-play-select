import Vue from 'vue'
import vSelect from 'vue-select'
import App from './App.vue'
import SelectFramework from './SelectFramework.vue'

Vue.component('v-select', vSelect)
Vue.component('select-framework', SelectFramework)

new Vue({
  el: '#app',
  render: h => h(App)
})
