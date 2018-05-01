import html from './template.html'
import { Banner } from 'components'

export default {
  template: html,
  props: {
    bannerList: {
      type: Array,
      default: []
    }
  },
  components: {
    Banner
  },
  data() {
    return {}
  },
  methods: {
  }
}
