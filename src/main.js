import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'
import 'lib-flexible'// 自适应插件
import './plugins/element.js'

Vue.prototype.$http = http;

// 自己写的样式
import './assets/css/normalize.css'
import './assets/css/global_su.css'

Vue.config.productionTip = false

/*分页页码*/
import pagination from '@/components/PaginationCom.vue';
/*标题*/
import title from '@/components/TitleCom.vue';
/*模态框*/
import dia from '@/components/DiaCom.vue';
/*加载*/
import loading from '@/components/LoadingCom.vue'

function _extend(base, clazz) {
  return {
    extends:base,
    mounted:function() {
      var el = this.$el;
      el.className = el.className + " " + clazz;
    }
  };
}

function _install(Vue, name, comp) {
  Vue.component(name, _extend(comp, name));
}

function _confirm(message, fok, fcancel) {
  MessageBox.confirm(message, '确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    //  type: 'warning'
  }).then(() => {
    if(fok) {
        fok();
    }
  }).catch(() => {
    if(fcancel) {
        fcancel();
    }
  });
}

const install = function(Vue, opts = {}) {
  _install(Vue, "su-loading", loading);
  _install(Vue, "su-page", pagination);
  _install(Vue, "su-title", title);
  _install(Vue, "su-dia", dia);
  Vue.prototype.$confirm = _confirm;
};

Vue.use(install);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
