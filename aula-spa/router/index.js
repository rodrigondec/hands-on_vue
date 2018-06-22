import Vue from 'vue'
import Router from 'vue-router'

import CardList from '../src/components/CardList.vue'
import SobreView from '../src/views/SobreView.vue'
import HomeView from '../src/views/HomeView.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HomeView',
			component: HomeView
		},
		{
			path: '/content',
			name: 'CardList',
			component: CardList
		},
		{
			path: '/sobre',
			name: 'SobreView',
			component: SobreView
		}
	]
})


