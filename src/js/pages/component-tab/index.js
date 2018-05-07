import html from './template.html'
// import { Tab } from 'components'
import { Tab } from 'rf-vue-ui'

export default {
  template: html,
  props: {},
  components: {
    'tab': Tab
  },
  data() {
    return {
      tabData: [
        {
          id: '001',
          name: 'tab1'
        },
        {
          id: '002',
          name: 'tab2'
        },
        {
          id: '003',
          name: 'tab3'
        }
      ]
    }
  },
  methods: {
  }
}
