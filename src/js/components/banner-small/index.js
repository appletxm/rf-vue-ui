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
  }
}
