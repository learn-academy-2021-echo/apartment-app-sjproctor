import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { faHome, faCity, faUser, faEnvelope, faDollarSign, faBed, faToiletPaper, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    return(
      <main>
        <h3>Apartment Features</h3>
        <article className="cards">
          {apartment &&
            <section className="card">
              <h4>Location</h4>
              <div className="address">
                <FontAwesomeIcon icon={faHome} className="fa-icon" />{apartment.street}
              </div>
              <div className="address">
                <FontAwesomeIcon icon={faCity} className="fa-icon" />{apartment.city}, {apartment.state}
              </div>
              <br />
              <h4>Manager Info</h4>
              <div className="address">
                <FontAwesomeIcon icon={faUser} className="fa-icon" />{apartment.manager}
              </div>
              <div className="address">
                <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />{apartment.email}
              </div>
              <br />
              <h4>Details</h4>
              <div className="address">
                <FontAwesomeIcon icon={faDollarSign} className="fa-icon" />{apartment.price} per month
              </div>
              <div className="address">
                <FontAwesomeIcon icon={faBed} className="fa-icon" />Bedrooms: {apartment.bedrooms}
              </div>
              <div className="address">
                <FontAwesomeIcon icon={faToiletPaper} className="fa-icon" />Bathrooms: {apartment.bathrooms}
              </div>
              <div className="address">
                <FontAwesomeIcon icon={faPaw} className="fa-icon" />Pets Allowed: {apartment.pets}
              </div>
              <br />
              <NavLink to="/apartmentindex">
                <button>Back</button>
              </NavLink>
            </section>
          }
        </article>
      </main>
    )
  }
}
export default ApartmentShow
