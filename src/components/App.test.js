import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

describe('Given I\'m on Mow It Now main page', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() })
  })

  describe('When the page is loaded', () => {
    test('Then the "Hello World" is shown', () => {
      expect(shallow(<App />).contains(<h1>Hello World</h1>)).toBe(true)
    })
  })
})
