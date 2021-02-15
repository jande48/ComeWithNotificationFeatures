import { ADD_NOTIFICATION, ADD_GET_FRIENDS_FAILURE, ADD_GET_FRIENDS_SUCCESS, ADD_GET_FRIENDS_LOADING } from './notificationsTypes'

const initialState = {
  notification: true,
  getFriendsSuccess: false,
  getFriendsFailure: false,
  getFriendsLoading: false,
  
}

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: return {
      ...state,
      notification: action.payload
    }
    case ADD_GET_FRIENDS_FAILURE: return {
      ...state,
      getFriendsSuccess: action.payload
    }
    case ADD_GET_FRIENDS_SUCCESS: return {
      ...state,
      getFriendsFailure: action.payload
    }
    case ADD_GET_FRIENDS_LOADING: return {
      ...state,
      getFriendsLoading: action.payload
    }
    default: return state
  }
}

export default notificationsReducer