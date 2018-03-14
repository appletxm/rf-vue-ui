import html from './template.html'

export default {
  template: html,
  props: {
    stepsData: {
      type: Array,
      default: []
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      stepWidthCs: {
        width: '50%'
      },
      stepNoWidth: {
        width: '0'
      }
    }
  },
  methods: {},
  created() {
    this.stepWidthCs = {
      width: 1 / (this.stepsData.length - 1) * 100 + '%'
    }
  },
  mounted() {}
}
