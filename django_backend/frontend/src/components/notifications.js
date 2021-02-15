import { ReactReduxContext } from "react-redux";

import React, { useEffect, useRef } from "react"
import { connect } from 'react-redux'
import { addNotification, getFriends } from '../redux'

function Notifications (props) {
    useEffect(() => {
       
        props.getFriends('The first get Friends Request')

        })

    return (
        <div>
            <h1>Notifications Component</h1>
            {props.getFriendsFailure}
            {props.getFriendsLoading}
            {props.getFriendsSuccess}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        notification: state.notificationsFromRootReducer.notification,
        getFriendsFailure: state.notificationsFromRootReducer.getFriendsFailure,
        getFriendsLoading: state.notificationsFromRootReducer.getFriendsLoading,
        getFriendsSuccess: state.notificationsFromRootReducer.getFriendsSuccess,
    }
  }
const mapDispatchToProps = dispatch => {
    return {
    addNotification: (x) => dispatch(addNotification(x)),
    getFriends: (data) => dispatch(getFriends(data)),
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications)
