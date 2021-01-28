import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
Vue.use(hljs.vuePlugin);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
