import { ADD_NOTIFICATION } from './notificationsTypes'

export const addNotification = (x) => {

  return {
    type: ADD_NOTIFICATION,
    payload: x
  }
}
