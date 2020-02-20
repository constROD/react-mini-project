import {
  SET_USER_INFO,
} from '../enums/types'

export function setCurrentUserInfo(obj) {
  return {
      type: SET_USER_INFO,
      obj
  }
}