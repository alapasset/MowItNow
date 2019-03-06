import React from 'react'
import Grid from '@material-ui/core/Grid'

export default class App extends React.Component {
  render () {
    return <div id='mowitnow'>
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
  }
}
