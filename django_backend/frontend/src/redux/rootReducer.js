import { combineReducers } from 'redux'
import notificationsReducer from './notificationsReducer/notificationsReducer'

const rootReducer = combineReducers({
  notificationsFromRootReducer: notificationsReducer,

})

export default rootReducer