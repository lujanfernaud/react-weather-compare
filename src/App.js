import React, { Component } from 'react'

import CityModel from './lib/cityModel'

import './App.css'
import Search from './components/Search'
import City from './components/City/City'

class App extends Component {
  constructor() {
    super()

    this.cityModel = new CityModel()

    this.state = {
      city1: {
        name: 'Santa Cruz de Tenerife, ES',
        status: 'Sunny',
        iconCode: '800',
        temp: 23
      },
      city2: {
        name: 'London, GB',
        status: 'Cloudy',
        iconCode: '803',
        temp: 25
      }
    }

    this.handleUpdate = this._handleUpdate.bind(this)
  }

  componentWillMount() {
    const city1 = 'Santa Cruz de Tenerife, ES'
    const city2 = 'London, GB'

    this._updateState(city1, city2)
  }

  render() {
    return (
      <section className='section'>
        <header>
          <h1 className='main-heading'>Weather Compare</h1>
        </header>

        <main className='main'>
          <Search onSubmit={this.handleUpdate} />

          <div className='information is-size-5'>
            <City city={this.state.city1} />
            <City city={this.state.city2} />
          </div>
        </main>
      </section>
    )
  }

  // private

  _handleUpdate(city1, city2) {
    this._updateState(city1, city2)
  }

  async _updateState(city1, city2) {
    console.log('_updateState', city1, city2)

    const city1Data = await this.cityModel.findOrCreate(city1)
    const city2Data = await this.cityModel.findOrCreate(city2)

    this.setState({
      city1: city1Data,
      city2: city2Data
    })
  }
}

export default App
