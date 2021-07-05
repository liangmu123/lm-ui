import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('examples/views/layout'),
    redirect: '/intro',
    children: [
      {
        path: 'intro',
        name: 'intro',
        component: () => import('docs/intro.md')
      },
      {
        path: 'install',
        name: 'install',
        component: () => import('docs/install.md')
      },
      {
        path: 'quickStart',
        name: 'quickStart',
        component: () => import('docs/quickStart.md')
      },
      {
        path: 'vClick',
        name: 'vClick',
        component: () => import('docs/helpers/v-click.md')
      },
      {
        path: '/amountTransform',
        name: '金额转换',
        component: () => import('docs/utils/amountTransform.md')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router