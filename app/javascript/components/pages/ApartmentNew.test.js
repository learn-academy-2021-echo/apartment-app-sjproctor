import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentNew from './ApartmentNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentNew renders", () => {
  it("displays a heading", () => {
    const apartmentNew = shallow(<ApartmentNew />)
    const newheading = apartmentNew.find("h3")
    expect(newheading.text()).toEqual("Add a New Apartment")
  })
  it("displays a form", () => {
    const apartmentNew = shallow(<ApartmentNew />)
    const formGroup = apartmentNew.find("FormGroup")
    expect(formGroup.length).toEqual(9)
    const label = apartmentNew .find("Label")
    expect(label.length).toEqual(9)
    const input = apartmentNew .find("Input")
    expect(input.length).toEqual(9)
  })
})
