import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When ApartmentIndex renders", () => {
  it("displays a header", () => {
    const index = shallow(<ApartmentIndex />)
    const indexHeading = index.find("h2").text()
    expect(indexHeading).toEqual("Index")
  })
})
