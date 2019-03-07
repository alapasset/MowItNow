import React from 'react'
import Plot from './Plot'

export default class Land extends React.Component {
  createLand () {
    let lineOfplots = []
    for (let y = this.props.y; y > 0; y--) {
      let plots = []
      for (let x = 1; x <= this.props.x; x++) {
        plots.push(<Plot x={x} y={y} />)
      }
      lineOfplots.push(<div className='line'>{plots}</div>)
    }
    return lineOfplots
  }

  render () {
    return (<div id='land'>{this.createLand()}</div>)
  }
}
