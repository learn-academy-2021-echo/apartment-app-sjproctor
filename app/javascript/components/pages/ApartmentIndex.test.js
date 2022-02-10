import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'
import mockData from '../mockData.js'

Enzyme.configure({adapter: new Adapter()})

describe("When ApartmentIndex renders", () => {
  it("displays a header", () => {
    const apartmentIndex = shallow(<ApartmentIndex />)
    const indexHeading = apartmentIndex.find("h3").text()
    expect(indexHeading).toEqual("Apartment Listings")
  })
  it("displays cards", () => {
    const apartmentIndex = shallow(<ApartmentIndex apartments={mockData} />)
    const apartmentCards = apartmentIndex.find("section")
    expect(apartmentCards.length).toEqual(mockData.length)
  })
})
