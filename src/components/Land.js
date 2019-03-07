import React from 'react'
import Plot from './Plot'

export default class Land extends React.Component {
  createLand () {
    let land = []
    for (let y = this.props.y; y > 0; y--) {
      let plots = []
      for (let x = 1; x <= this.props.x; x++) {
        plots.push(<Plot key={x} x={x} y={y} />)
      }
      land.push(<div key={y} className='line'>{plots}</div>)
    }
    return land
  }

  render () {
    return (<div id='land'>{this.createLand()}</div>)
  }
}
