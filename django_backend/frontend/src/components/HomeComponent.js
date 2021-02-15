import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import {Link} from 'react-router-dom'
import Notifications from './notifications'

function HomeComponent () {
  
  return (
    <div>
      <Provider store={store}>
        <h1>All Users</h1>
        <Notifications/>
      </Provider>
    </div>
  )
}

export default HomeComponent