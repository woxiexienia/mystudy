// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
// import router from './router'
import VueResource from 'vue-resource'
import VRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(VRouter)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.config.productionTip = false
let router = new VRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component: IndexPage
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Layout/>',
  router,
  components: { Layout  }
})
