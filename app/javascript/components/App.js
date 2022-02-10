import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return(
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartment-index" component={ApartmentIndex} />
        </Switch>
      </Router>
    )
  }
}
export default App
