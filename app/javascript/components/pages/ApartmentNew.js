import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newApartment: {
        street: "101 Market Street",
        city: "San Diego",
        state: "CA",
        manager: "Bob",
        email: "bob@bob.com",
        price: "2000",
        bedrooms: "2",
        bathrooms: "2",
        pets: "yes",
        user_id: this.props.current_user ? this.props.current_user.id : ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { newApartment } = this.state
    newApartment[e.target.name] = e.target.value
    this.setState({newApartment: newApartment})
  }
  handleSubmit = () => {
    this.props.createApartment(this.state.newApartment)
    this.setState({submitted: true})
  }

  render() {
    return(
      <main>
        <h3>Add a New Apartment</h3>
        <Form>
          <FormGroup>
            <Label for="street">
              Street Address
            </Label>
            <Input
              name="street"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.street}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">
              City
            </Label>
            <Input
              name="city"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.city}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">
              State
            </Label>
            <Input
              name="state"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.state}
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager">
              Manager's Name
            </Label>
            <Input
              name="manager"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.manager}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">
              Manager's Email
            </Label>
            <Input
              name="email"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">
              Rental Price
            </Label>
            <Input
              name="price"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.price}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms">
              Bedrooms
            </Label>
            <Input
              name="bedrooms"
              type="number"
              onChange={this.handleChange}
              value={this.state.newApartment.bedrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms">
              Bathrooms
            </Label>
            <Input
              name="bathrooms"
              type="number"
              onChange={this.handleChange}
              value={this.state.newApartment.bathrooms}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pets">
              Are Pets Allowed?
            </Label>
            <Input
              name="pets"
              type="text"
              onChange={this.handleChange}
              value={this.state.newApartment.pets}
            />
          </FormGroup>
        </Form>
        <button
          onClick={this.handleSubmit}
          name="submit"
        >
          Add a New Apartment
        </button>
        {this.state.submitted && <Redirect to="/myapartments"/>}
      </main>
    )
  }
}
export default ApartmentNew
