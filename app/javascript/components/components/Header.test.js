import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
import mockPic from '../mockFile.js'

Enzyme.configure({adapter: new Adapter()})

describe("When Header renders", () => {
  it("displays a nav bar", () => {
    const header = shallow(<Header />)
    const headerNav = header.find(".nav-bar")
    expect(headerNav.length).toEqual(3)
  })
  it("displays an image", () => {
    const logo = shallow(<Header />)
    expect(logo.find("img").prop("src")).toEqual(mockPic);
  })
})
