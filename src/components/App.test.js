import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

describe('Given I\'m on Mow It Now main page', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() })
  })

  describe('When the page is loaded', () => {
    test('Then the grid with two columns Jardin & Contrôles is shown', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('h2')).toHaveLength(2)
      expect(wrapper.find('h1')).toHaveLength(1)
      expect(wrapper.find('Land')).toHaveLength(1)
    })
  })
})
