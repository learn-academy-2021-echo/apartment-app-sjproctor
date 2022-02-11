import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentProtectedIndex from './ApartmentProtectedIndex'
import mockData from '../mockData.js'

Enzyme.configure({adapter: new Adapter()})

describe("When ApartmentProtectedIndex renders", () => {
  it("displays a header", () => {
    const apartmentIndex = shallow(<ApartmentProtectedIndex />)
    const indexHeading = apartmentIndex.find("h3").text()
    expect(indexHeading).toEqual("My Apartment Listings")
  })
  it("displays cards", () => {
    const apartmentIndex = shallow(<ApartmentProtectedIndex apartments={mockData} />)
    const apartmentCards = apartmentIndex.find("section")
    expect(apartmentCards.length).toEqual(mockData.length)
  })
})
