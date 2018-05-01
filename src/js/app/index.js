import '../../css/index.less'
import html from './template.html'
import {Banner} from 'components'

export default {
  template: html,

  data() {
    return {
      menuData: null,
      isShowLogin: false,
      isShowRegister: false,
      isShowResetPwd: false
    }
  },
  components: {
    // 'navigator': navigator,
    // 'left-menu': leftMenu,
    // 'app-bread': bread,
    // 'pop-login': popLogin,
    // 'pop-register': popRegister,
    // 'pop-reset-pwd': popResetPwd
  },
  created() {
    // let isUserLogin = auth.checkUserLogin()

    // if (isUserLogin !== true) {
    //   window.location.href = '/login.html'
    // } else {
    //   this.$store.commit(SET_USER_INFO, storage.getUserInfoFromStorage())
    //   this.$store.commit(SET_USER_LOGIN_STATUS, auth.checkUserLogin())
    // }
  },
  mounted() {
    // globals.appStore = this.$store
  },

  watch: {
    // '$store.state.isHandlingLogin'(value) {
    //   this.isShowLogin = value
    // },
    // '$store.state.isHandlingRegister'(value) {
    //   this.isShowRegister = value
    // },
    // '$store.state.isHandlingResetPwd'(value) {
    //   this.isShowResetPwd = value
    // }
  }
}
