import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { faHome, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return(
      <main>
        <h3>Apartment Listings</h3>
        <article className="cards">
          {apartments && apartments.map(apartment => {
            return(
              <section key={apartment.id} className="card">
                <div className="address">
                  <FontAwesomeIcon icon={faHome} className="fa-icon" />
                    {apartment.street}
                </div>
                <div className="address">
                  <FontAwesomeIcon icon={faCity} className="fa-icon" />
                    {apartment.city}, {apartment.state}
                </div>
                <br />
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  <button>
                    More Info
                  </button>
                </NavLink>
              </section>
            )
          })}
        </article>
      </main>
    )
  }
}

export default ApartmentIndex
