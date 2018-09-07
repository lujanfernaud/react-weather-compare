import React, { Component } from 'react'

import Icon from './Icon'

class City extends Component {
  render() {
    return (
      <div class='information-card'>
        <div class='information-card__loader' id='loader-1'>
          <h2 class='information-card__heading is-size-4' id='loader-city-1'>
          </h2>

          <p class='information-card__status' id='loader-status-1'>
            Fetching data...
          </p>

          <img src='dist/svg/wi-thermometer.svg'
            class='information-card__icon' />

          <p class='information-card__temperature' id='loader-temp-1'>
          </p>
        </div>

        <div class='information-card__data opacity-1' id='data-1'>
          <h2 class='information-card__heading is-size-4' id='data-city-1'>
            {this.props.city.name}
          </h2>

          <p class='information-card__status' id='data-status-1'>
            {this.props.city.status}
          </p>

          <Icon iconCode={this.props.city.iconCode} />

          <p class='information-card__temperature' id='data-temp-1'>
            {this.props.city.temp} ℃
          </p>
        </div>
      </div>
    )
  }
}

export default City
