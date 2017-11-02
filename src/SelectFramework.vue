<template>
  <v-select
    v-model="selected"
    :options="options"
    :multiple="multiple">
  </v-select>
</template>

<script>
export default {
  name: "SelectFramework",
  props: {
    options: {
      default: () => ["Vue.js", "React", "Angular"],
      type: Array
    },
    value: String,
    foo: String,
    multiple: false
  },
  data() {
    return {
      selected: this.value,
    };
  },
  watch: {
    selected () {
      this.$emit('input', this.selected)
      this.$emit('update:foo', this.selected)
    },
    value () {
      this.selected = this.value
    },
    foo () {
      this.selected = this.foo
    }
  }
};
</script>
