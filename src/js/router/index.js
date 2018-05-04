/* global VueRouter */
import Banner from 'pages/component-banner'
import Tab from 'pages/component-tab'
import StepFlow from 'pages/component-step-flow'
let routes, router

routes = [
  { path: '/', component: Tab },
  { path: '/#/', component: Tab },
  { path: '/home', component: Tab },
  { path: '/tab', component: Tab },
  { path: '/banner', component: Banner },
  { path: '/step-flow', component: StepFlow }
]

router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  next()
})

export default router
