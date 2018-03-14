// const TOKEN_INVALID = '您已经离开我太久了，请重新登录'
import globals from 'common/globals'
import { IS_HANDLING_LOGIN } from 'store/mutation-types'

export const errorCodeMatch = {
  '401'(resData) {
    // window.location.href = './login.html'
    globals.appStore.commit(IS_HANDLING_LOGIN, true)
    throw (resData)
  }
}
