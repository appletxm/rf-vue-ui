/* global localStorage */
export const USER_INFO = 'user_info'
export const URL_BEFORE_TOKEN_EXPIRED = 'urlBeforeTokenExpired'
export const CURRENT_MODULE = 'currentModule'
export const CURRENT_MENU_ID = 'currentMenuId'

export const storage = {
  setUserInfoToStorage(value) {
    localStorage.setItem(USER_INFO, encodeURIComponent(JSON.stringify(value)))
  },

  getUserInfoFromStorage() {
    let userInfo = localStorage.getItem(USER_INFO)
    try {
      return JSON.parse(decodeURIComponent(userInfo))
    } catch (e) {
      return userInfo
    }
  },

  getUserId(userIdFromStore) {
    let userInfo

    if (!userIdFromStore) {
      userInfo = this.getUserInfoFromStorage()
      if (userInfo) {
        return userInfo.name
      }
    }

    return userIdFromStore
  },

  loginOutRemoveAll() {
    localStorage.clear()
  },

  get(key) {
    let res = localStorage.getItem(key)

    res = res ? decodeURIComponent(res) : ''
    if ((/\{|\}|\[|\]/g).test(res)) {
      try {
        return JSON.parse(res)
      } catch (e) {
        return res
      }
    } else {
      return res
    }
  },

  set(key, value) {
    let objKeys = typeof value === 'string' ? [] : Object.keys(value)
    let str = value

    if (objKeys.length > 0) {
      str = JSON.stringify(value)
    } else {
      if (str === null || str === undefined) {
        str = ''
      }
    }

    str = encodeURIComponent(str)

    localStorage.setItem(key, str)
  },

  remove(key) {
    localStorage.removeItem(key)
  }
}
