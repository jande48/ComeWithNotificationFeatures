import { ADD_NOTIFICATION } from './notificationsTypes'

const initialState = {
  notification: true
}

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: return {
      ...state,
      notification: action.payload
    }

    default: return state
  }
}

export default notificationsReducer