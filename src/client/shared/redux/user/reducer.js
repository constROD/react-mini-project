import {
  SET_USER_INFO
} from '../enums/types'

const initialState = {
  user: {
    info: {
      name: 'Rod'
    }
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        user: action.obj
      }
    default: return state
  }
}