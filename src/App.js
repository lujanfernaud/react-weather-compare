import React, { Component } from 'react'

import CityModel from './lib/cityModel'
import SearchModel from './lib/searchModel'
import SearchResults from './lib/searchResults'

import formatCity from './lib/cityNameFormatter'
import { fetching } from './lib/constants'

import './App.css'
import Search from './components/Search'
import City from './components/City/City'

class App extends Component {
  constructor() {
    super()
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
        temp: 19
      }
    }
    this.cityModel = new CityModel()
    this.updateState = this._updateState.bind(this)
  }

  componentWillMount() {
    if (SearchModel.lastSearch()) {
      const { city1, city2 } = SearchModel.lastSearch()

      this._updateState(city1, city2)
    } else {
      const city1 = 'Santa Cruz de Tenerife, ES'
      const city2 = 'London, GB'

      this._updateState(city1, city2)
    }
  }

  render() {
    return (
      <section className='section'>
        <header>
          <h1 className='main-heading'>Weather Compare</h1>
        </header>

        <main className='main'>
          <Search
            city1={formatCity(this.state.city1)}
            city2={formatCity(this.state.city2)}
            onSubmit={this.updateState}
          />

          <div className='information is-size-5'>
            <City city={formatCity(this.state.city1)} />
            <City city={formatCity(this.state.city2)} />
          </div>
        </main>
      </section>
    )
  }

  // private

  async _updateState(city1, city2) {
    let city1Data, city2Data

    if (this.cityModel.isUpdated(city1)) {
      city1Data = this.cityModel.find(city1)
    } else {
      this.setState({ city1: fetching })
      city1Data = await this.cityModel.create(city1)
    }

    if (this.cityModel.isUpdated(city2)) {
      city2Data = this.cityModel.find(city2)
    } else {
      this.setState({ city2: fetching })
      city2Data = await this.cityModel.create(city2)
    }

    if (SearchResults.wereValid(city1Data, city2Data)) {
      SearchModel.storeSearch(city1, city2)
    }

    this.setState({
      city1: city1Data,
      city2: city2Data
    })
  }
}

export default App
