import html from './template.html'

export default {
  template: html,
  props: {
    bannerList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {}
  },
  methods: {
    $gotoCreateOrder() {
      window.open('/portal-create-simple-order.html')
    },

    $gotoSupplierRegiter() {
      window.open('/portal-supplier-detail.html')
    }
  }
}
