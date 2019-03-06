import React from 'react'
import Grid from '@material-ui/core/Grid'

export default class Land extends React.Component {
  render () {
    let divs
    for (let i = 0; i < this.props.x * this.props.y; i++) {
      divs += <Grid item xs={12 / this.props.x}><div class='landCase'>{i}</div></Grid>
    }
    return (<Grid container spacing={0}>{divs}</Grid>)
  }
}
