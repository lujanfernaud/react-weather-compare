import React, { Component } from 'react'

import weatherIcons from './weatherIcons'

class Icon extends Component {
  constructor(props) {
    super(props)
    this.iconPath = weatherIcons[this.props.iconCode].path
  }

  render() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        enable-background='new 0 0 30 30'
        viewBox='0 0 30 30'
        className='information-card__icon'>
        <path d={this.iconPath} />
      </svg>
    )
  }
}

export default Icon
