import React, { Component } from 'react'
import { faHome, faCity, faUser, faEnvelope, faDollarSign, faBed, faToiletPaper, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ApartmentProtectedIndex extends Component {
  render() {
    const { apartments } = this.props
    return(
      <main>
        <h3>My Apartment Listings</h3>
        <article className="cards">
          {apartments && apartments.map(apartment => {
            return(
              <section key={apartment.id} className="card-full-details">
                <h5>Location</h5>
                <div className="address">
                  <FontAwesomeIcon icon={faHome} className="fa-icon" />{apartment.street}
                </div>
                <div className="address">
                  <FontAwesomeIcon icon={faCity} className="fa-icon" />{apartment.city}, {apartment.state}
                </div>
                <br />
                <h5>Manager Info</h5>
                <div className="address">
                  <FontAwesomeIcon icon={faUser} className="fa-icon" />{apartment.manager}
                </div>
                <div className="address">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />{apartment.email}
                </div>
                <br />
                <h5>Details</h5>
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
              </section>
            )
          })}
        </article>
      </main>
    )
  }
}

export default ApartmentProtectedIndex
