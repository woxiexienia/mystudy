// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'
import RedBanana from './components/redBanana'
Vue.use(VRouter)
// Vue.config.productionTip = false

let router = new VRouter({
	mode:'history',
	routes:[
		{
			path:'/apple',
			component: Apple
		},
		{
			path: '/banana',
			component: Banana,
			children:[
				{
					path:'red',
					component: Apple
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
