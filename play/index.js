import { play } from 'vue-play'
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)


import SelectFramework from '../src/SelectFramework.vue'

play(SelectFramework)
  .name('SelectFramework')
  .displayName('Select Framework')
  .add('default', '<select-framework />')
  .add('multiple', '<select-framework multiple />')
  .add('custom options', `<select-framework :options="['custom1','custom2']" />`)
  .add('custom options with labels', `<select-framework :options='[{value: "CA", label: "Canada"}, {value: "UK", label: "United Kingdom"}]' />`)
  .add('v-model', {
    data() {
      return {
        selected: null,
        syncedVal: null
      }
    },
    template: `
      <div>
        <p>selected: {{selected}} </p>
        <p>syncedVal: {{syncedVal}} </p>
        <select-framework
          v-model="selected"
          :foo.sync="syncedVal">
        </select-framework>
        <p>
          <button @click="selected = 'Vue.js'">Set selected to Vue.js</button>
          <button @click="syncedVal = 'React'">Set syncedVal to React</button>
        </p>
      </div>
    `
  })
  // .add('2-way value sync', `<select-framework :value.sync="syncedVal" />`) // doesn't seem to work