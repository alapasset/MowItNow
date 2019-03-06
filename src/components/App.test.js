import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Grid from '@material-ui/core/Grid'
import App from './App'

describe('Given I\'m on Mow It Now main page', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() })
  })

  describe('When the page is loaded', () => {
    test('Then the grid with two columns Jardin & Contrôles is shown', () => {
      expect(shallow(<App />).contains(
        <div id='mowitnow'>
          <h1>Mow It Now</h1>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <h2>Jardin</h2>
            </Grid>
            <Grid item xs={6}>
              <h2>Contrôles</h2>
            </Grid>
          </Grid>
        </div>
      )).toBe(true)
    })
  })
})
