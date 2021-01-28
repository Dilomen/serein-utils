<template>
  <div class="home"
       :class="{ blank: mode }">
    <m-header @modeChange="handleChangeMode" :checked="mode"></m-header>
    <div class="container-wrap">
      <left-menus></left-menus>
      <div class="container">
        <router-view></router-view>
      </div>
      <!-- <el-footer>
            <div class="footer">
              Dilomen
            </div>
          </el-footer> -->
    </div>
  </div>
</template>

<script>
import mHeader from '../components/header'
import leftMenus from '../components/left-menus'

export default {
  name: 'app',
  components: { mHeader, leftMenus },
  data () {
    return {
      mode: JSON.parse(window.localStorage.getItem('sereinMode'))
    }
  },
  methods: {
    handleChangeMode (mode) {
      window.localStorage.setItem('sereinMode', mode)
      this.mode = mode
    }
  }
}
</script>

<style lang="scss">
.container {
  // height: calc(100vh - 130px);
  height: calc(100vh - 110px);
  overflow-y: scroll;
  padding: 24px;
  border-bottom: 0.5px solid #e2e8f0;
}
.container-wrap {
  display: flex;
}
.footer {
  display: flex;
  align-items: center;
  font-weight: 700;
  height: 100%;
  justify-content: center;
}
.blank {
  filter: invert(1) hue-rotate(180deg);
  background-color: #fff;
  transition: all 300ms;
}
</style>