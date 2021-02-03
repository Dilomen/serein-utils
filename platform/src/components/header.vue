<template>
  <div class="header">
    <img class="logo"
         src="../assets/logo.png"
         alt="">
    <div class="header-content">
      <div class="search-wrap">
        <input />
        <!-- <div class="options-wrap">
          <div class="options"
               v-for="item in 10"
               :key="item">324234234</div>
        </div> -->
      </div>
      <input class="ios-switch"
             type="checkbox"
             value="0"
             :checked="checked"
             @change="handleChange">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  created () { },
  mounted () { },
  methods: {
    handleChange (e) {
      this.$emit('modeChange', e.target.checked)
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 4rem;
  padding-right: 20px;
  border-bottom: 0.5px solid #e2e8f0;
}
.logo {
  height: 30px;
}
.header-content {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
  align-items: center;
  .search-wrap {
    position: relative;
    z-index: 1000;
    input {
      padding: 10px;
      width: 200px;
      border-radius: 20px;
      border: 1px solid rgb(42, 112, 2);
      outline: 0;
    }
    .options-wrap {
      position: absolute;
      width: 100%;
      .options {
        height: 40px;
        line-height: 40px;
        background: rgb(160, 116, 116);
        padding: 0 10px;
        box-sizing: border-box;
      }
    }
  }
}
.btn,
.ios-switch::before,
.ios-switch {
  margin-left: 5px;
  border-radius: 14px;
  width: 40px;
  height: 22px;
  outline: none;
  background-color: #e9e9eb;
}
.ios-switch {
  position: relative;
  appearance: none;
  cursor: pointer;
  transition: all 100ms;
}
.ios-switch::before {
  position: absolute;
  content: "";
  transition: all 300mscubic-bezier(0.45, 1, 0.4, 1);
}
.ios-switch::after {
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 9px;
  width: 18px;
  height: 18px;
  background-color: #fff;
  box-shadow: 1px1px5pxrgba (0, 0, 0, 0.3);
  content: "";
  transition: all 500mscubic-bezier(0.4, 0.4, 0.25, 1.35);
}
.ios-switch:checked {
  background-color: #5eb662;
}
.ios-switch:checked::before {
  transform: scale(0);
}
.ios-switch:checked::after {
  transform: translateX(18px);
}
.ios-switch:checked ~ header,
.ios-switch:checked ~ div {
  filter: invert(1) hue-rotate(180deg);
}
.ios-switch:checked ~ headerimg,
.ios-switch:checked ~ headervideo,
.ios-switch:checked ~ header.logo,
.ios-switch:checked ~ header.icon,
.ios-switch:checked ~ header.jubao-con,
.ios-switch:checked ~ divimg,
.ios-switch:checked ~ divvideo,
.ios-switch:checked ~ div.logo,
.ios-switch:checked ~ div.icon,
.ios-switch:checked ~ div.jubao-con {
  filter: invert(1) hue-rotate(180deg);
}
.ios-switch ~ header,
.ios-switch ~ div {
  background-color: #fff;
  transition: all 300ms;
}
</style>
