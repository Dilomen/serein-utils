<template>
  <div class="conent-wrap markdown-body">
    <p class="btn"
       v-if="'/use' !== $route.path"
       @click="handleOpen">源码</p>
    <component :is="current"></component>
  </div>
</template>
<script>
import modules from './index'
export default {
  props: {},
  data () {
    return {
      ...modules,
    }
  },
  computed: {
    current () {
      return this[this.$route.meta.key]
    }
  },
  created () { },
  methods: {
    handleOpen () {
      window.open('https://github.com/Dilomen/serein-utils/blob/master/src' + this.$route.path + '.js')
    }
  }
}
</script>
<style scoped lang="scss">
.conent-wrap {
  width: 100%;
  .btn {
    position: fixed;
    right: 5rem;
    top: 120px;
    color: #718096;
    &:hover {
      color: #333;
      cursor: pointer;
    }
  }
}
</style>
