import { ReactReduxContext } from "react-redux";

import React, { useEffect, useRef } from "react"
import { connect } from 'react-redux'
import { addNotification } from '../redux'

function Notifications (props) {
    useEffect(() => {
       
        //props.getNotifications()

        })

    return (
        <div>
            <h1>Notifications</h1>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        notification: state.notificationsFromRootReducer.notification,
    }
  }
const mapDispatchToProps = dispatch => {
    return {
    addNotification: () => dispatch(addNotification()),
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications)
