import html from './template.html'
import { Banner } from 'components'
// import { Banner } from 'rf-vue-ui'

export default {
  template: html,
  props: {},
  components: {Banner},
  data() {
    return {
      bannerList: [
        {
          img: 'assets/images/banner1.jpg'
        },
        {
          img: 'assets/images/banner2.jpg'
        }
      ]
    }
  },
  methods: {
  }
}
