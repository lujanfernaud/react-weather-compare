import React, { Component } from 'react'
import styled from 'styled-components'

import weatherIcons from './weatherIcons'

// ------
// Styles
// ------

const SVGIcon = styled.svg`
  width: 5rem;
  height: 5rem;
  margin-top: .85rem;
  margin-bottom: .55rem;
`

// ----------
// Definition
// ----------

class Icon extends Component {
  render() {
    return (
      <SVGIcon
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new 0 0 30 30'
        viewBox='0 0 30 30'>
        <path d={weatherIcons[this._iconCode()].path} />
      </SVGIcon>
    )
  }

  // private

  _iconCode() {
    return this.props.iconCode || 800
  }
}

export default Icon
