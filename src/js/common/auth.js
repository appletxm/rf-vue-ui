import * as uiUtils from 'utils/uiUtils'
import {storage} from 'common/storage'

const ACCESS_TOKEN = 'loginToken'

export default {
  checkUserLogin() {
    let hasToken
    // ,getLoginUserInfo

    hasToken = false
    // getLoginUserInfo = false

    if (uiUtils.uiCookie.get(ACCESS_TOKEN)) {
      hasToken = true
    }

    // if (store.state.userInfo.userId) {
    //   getLoginUserInfo = true
    // }

    return hasToken
  },

  setTokenToCookie(value) {
    let cookieTime

    cookieTime = 1000 * 60 * 60 * 24
    uiUtils.uiCookie.set(ACCESS_TOKEN, value, cookieTime)
    // storage.set(ACCESS_TOKEN, value)
  },

  getTokenFromCookie() {
    let token = uiUtils.uiCookie.get(ACCESS_TOKEN)
    // let token = storage.get(ACCESS_TOKEN)
    return token
  },

  removeAllCookie() {
    uiUtils.uiCookie.delete(ACCESS_TOKEN)
    storage.remove(ACCESS_TOKEN)
  }
}
