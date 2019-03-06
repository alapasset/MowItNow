import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Land from './Land'

describe('Given a Land', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() })
  })

  describe('When land is initialize with goods props', () => {
    test('Then I show the good props', () => {
      const x = 4
      const y = 5
      const wrapper = shallow(<Land x={x} y={y} />)
      expect(wrapper.prop('x')).toEqual(x)
      expect(wrapper.prop('y')).toEqual(y)
    })

    test('Then I show the good number of div', () => {
      const x = 4
      const y = 5
      const wrapper = shallow(<Land x={x} y={y} />)
      expect(wrapper.find('.landCase')).toHaveLength(x * y)
    })
  })
})
