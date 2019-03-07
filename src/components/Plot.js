import React from 'react'

export default class Plot extends React.Component {
  render () {
    return <div className='plot'>({this.props.x}, {this.props.y})</div>
  }
}
