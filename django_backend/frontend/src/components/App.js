import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Notifications from './notifications'
import HomeComponent from './HomeComponent'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        {/* <Route path="/charts" component={AppComponent} />  */}
                        <Route path="/" component={HomeComponent} />
                    </Switch>
                </Router>
            </Provider>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'));