<template>
  <div class="markdown-body">
    <component :is="current"></component>
  </div>
</template>
<script>
import hasOwnProperty from './base/hasOwnProperty.md'
import isArray from './base/isArray.md'
export default {
  props: {},
  data () {
    return {
      hasOwnProperty,
      isArray
    }
  },
  computed: {
    current () {
      return this[this.$route.name]
    }
  },
  created () { },
  methods: {}
}
</script>
<style scoped>
h1 {
  font-size: 26px;
}
</style>
