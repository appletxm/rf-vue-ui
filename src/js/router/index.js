/* global VueRouter */
import { storage } from 'common/storage'
let routes, router

const Banner = () => import(/* webpackChunkName: "Banner" */ 'pages/component-banner')
// const UserInfo = () => import(/* webpackChunkName: "UserInfo" */ 'pages/user-info')
// const ErrorPage = () => import(/* webpackChunkName: "ErrorPage" */ 'pages/error')
// const ChangePassword = () => import(/* webpackChunkName: "ChangePassword" */ 'pages/change-password')
// const OrderList = () => import(/* webpackChunkName: "OrderList" */ 'pages/order-list')
// const OrderDetail = () => import(/* webpackChunkName: "OrderDetail" */ 'pages/order-detail')
// const InvoiceSet = () => import(/* webpackChunkName: "InvoiceSet" */ 'pages/invoice-set')
// const PaymentFast = () => import(/* webpackChunkName: "PaymentFast" */ 'pages/payment-fast')

routes = [
  // { path: '/', component: Banner },
  // { path: '/#/', component: Banner },
  // { path: '/home', component: Banner }
  // { path: '/userCenter/changePassword', component: ChangePassword },
  // { path: '/userCenter/userInfo', component: UserInfo },
  // { path: '/orders/orderList', component: OrderList },
  // { path: '/orders/orderDetail/:backPosition/:orderId', component: OrderDetail },
  // { path: '/invoice/invoiceSet', component: InvoiceSet },
  // {path: '/payment/paymentFast/:backPosition/:paymentBackPosition/:orderId', component: PaymentFast},
  // { path: '*', component: ErrorPage }
]

router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
  // messager.showLoading()
  // axios.post(apiUrls.getCurrentUserInfo).then((res) => {
  //   messager.closeLoading()
  //   document.body.scrollTop = 0
  //   next()
  // }).catch((error) => {
  //   messager.closeLoading()
  //   globals.appStore.commit(IS_HANDLING_LOGIN, true)
  //   next(false)
  // })

  document.body.scrollTop = 0
  next()
})

export default router
