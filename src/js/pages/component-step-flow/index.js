import html from './template.html'
import { StepFlow } from 'components'

export default {
  template: html,
  props: {},
  components: {StepFlow},
  data() {
    return {
      stepsData: [
        {
          code: '001',
          label: '开始'
        },
        {
          code: '002',
          label: '进行中'
        },
        {
          code: '003',
          label: '结束'
        }
      ]
    }
  },
  methods: {
  }
}
