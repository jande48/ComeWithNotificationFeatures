import { ADD_NOTIFICATION, ADD_GET_FRIENDS_FAILURE, ADD_GET_FRIENDS_SUCCESS, ADD_GET_FRIENDS_LOADING } from './notificationsTypes'
import axios from 'axios'
import Cookies from 'js-cookie'

export const addNotification = (x) => {
  return {
    type: ADD_NOTIFICATION,
    payload: x
  }
}
export const addGetFriendsFailure = (x) => {
  return {
    type: ADD_GET_FRIENDS_FAILURE,
    payload: x
  }
}
export const addGetFriendsSuccess = (x) => {
  return {
    type: ADD_GET_FRIENDS_SUCCESS,
    payload: x
  }
}
export const addGetFriendsLoading = (x) => {
  return {
    type: ADD_GET_FRIENDS_LOADING,
    payload: x
  }
}

export function getFriends(input) {
  return function (dispatch) {
      axios({
        method: 'post',
        url: '/getFriends/',
        data: $.toJSON(inputt),
        headers: {"X-CSRFToken": Cookies.get('csrftoken')},
      }).then(res => {
        const response = res.data;
        if (response['type'] == 'success'){
          dispatch(addGetFriendsSuccess(true))
        } else {
          dispatch(addGetFriendsFailure(true))
        }
        dispatch(addGetFriendsLoading(false)) 
      })
      // axios.post('/getFriends/',data).then(res => {
      //     const response = res.data;
      //     if (response['type'] == 'success'){
      //       dispatch(addGetFriendsSuccess(true))
      //     } else {
      //       dispatch(addGetFriendsFailure(true))
      //     }
      //     dispatch(addGetFriendsLoading(false))      
      // })
  }
}