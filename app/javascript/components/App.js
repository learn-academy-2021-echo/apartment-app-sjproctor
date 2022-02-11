import React, { Component } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import apartments from './mockData.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: apartments
    }
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    const { apartments } = this.state
    return(
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/apartmentindex"
            render={(props) => <ApartmentIndex apartments={apartments} />}
          />
          <Route
            path="/apartmentshow/:id"
            render={(props) => {
              let id = +props.match.params.id
              let apartment = this.state.apartments.find(apt => apt.id === id)
              return <ApartmentShow apartment={apartment} />
            }}
          />
        </Switch>
      </Router>
    )
  }
}
export default App
