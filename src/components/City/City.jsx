import React, { Component } from 'react'

import Icon from './Icon'

class City extends Component {
  render() {
    return (
      <div className='information-card'>
        <div className='information-card__loader'>
          <h2 className='information-card__heading is-size-4'>
          </h2>

          <p className='information-card__status'>
            Fetching data...
          </p>

          <img src='dist/svg/wi-thermometer.svg'
            className='information-card__icon' />

          <p className='information-card__temperature'>
          </p>
        </div>

        <div className='information-card__data opacity-1'>
          <h2 className='information-card__heading is-size-4'>
            {this.props.city.name}
          </h2>

          <p className='information-card__status'>
            {this.props.city.status}
          </p>

          <Icon iconCode={this.props.city.iconCode} />

          <p className='information-card__temperature'>
            {this.props.city.temp} ℃
          </p>
        </div>
      </div>
    )
  }
}

export default City
