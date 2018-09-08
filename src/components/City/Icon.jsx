import React, { Component } from 'react'

import weatherIcons from './weatherIcons'

class Icon extends Component {
  render() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new 0 0 30 30'
        viewBox='0 0 30 30'
        className='information-card__icon'>
        <path d={weatherIcons[this._iconCode()].path} />
      </svg>
    )
  }

  // private

  _iconCode() {
    return this.props.iconCode || 800
  }
}

export default Icon
