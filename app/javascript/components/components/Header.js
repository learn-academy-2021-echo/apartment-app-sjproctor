import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/apartment-logo.png'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <header>
        <div className="nav-bar">
          <NavLink to="/apartmentindex" className="nav-link">
            See All the Apartments
          </NavLink>
        </div>
        <div className="nav-bar">
          <NavLink to="/">
            <img src={logo} alt="apartment app logo" className="logo"/>
          </NavLink>
        </div>
        <div className="nav-bar">

          {logged_in &&
            <a href={sign_out_route} className="nav-link">Sign Out</a>
          }
          {!logged_in &&
            <a href={sign_in_route} className="nav-link">Sign In</a>
          }
          {!logged_in &&
            <a href={new_user_route} className="nav-link">Sign Up</a>
          }
        </div>
      </header>
    )
  }
}
export default Header
