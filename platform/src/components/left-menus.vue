<template>
  <div class="menus-wrap">
    <div class="first-menus"
         v-for="firstMenu in menus"
         :key="firstMenu.url">
      <p class="menus-text">
        {{ firstMenu.name }}
      </p>
      <div class="second-menus"
           v-for="secondMenu in firstMenu.submenus"
           :key="secondMenu.url">
        <p class="menus-text"
           @click="handleRouterLink(secondMenu.name)">
          {{ secondMenu.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import menus from '../menus'
export default {
  props: {},
  data () {
    return {
      menus
    }
  },
  computed: {},
  created () { },
  mounted () { },
  methods: {
    handleRouterLink (name) {
      if (!name || name === this.$route.name) return
      this.$router.push({ name })
    }
  }
}
</script>
<style scoped lang="scss">
.menus-wrap {
  width: 250px;
  box-sizing: border-box;
  height: calc(100vh - 65px);
  border-right: 1px solid #e2e8f0;
  text-align: left;
  padding: 1rem;
  overflow-y: scroll;
  .first-menus {
    font-weight: 800;
    font-size: 20px;
    padding-top: 15px;
  }
  .second-menus {
    font-weight: normal;
    font-size: 16px;
    padding-left: 5px;
    &:hover {
      background: rgba(49, 151, 149, 0.733);
      border-radius: 4px;
    }
    .menus-text {
      color: rgb(113, 128, 150);
      font-weight: 600;
      padding: 5px;
      word-break: break-all;
      &:hover {
        color: #333;
        cursor: pointer;
      }
    }
  }
}
</style>
