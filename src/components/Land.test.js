import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Land from './Land'

describe('Given a Land', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() })
  })

  describe('When land is initialize with goods props', () => {
    test('Then I show the good number of plots', () => {
      const x = 4
      const y = 5
      const wrapper = mount(<Land x={x} y={y} />)
      expect(wrapper.find('div.plot')).toHaveLength(x * y)
    })
  })
})
