import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme/theme'

import CityModel from './lib/cityModel'
import SearchModel from './lib/searchModel'
import SearchResults from './lib/searchResults'

import formatCity from './lib/cityNameFormatter'
import { fetching } from './lib/constants'

import Search from './components/Search'
import City from './components/City/City'

const Section = styled.section`
  position: relative;
  top: -3.4%;
  padding: 0 1.75rem 1.75rem 1.75rem;

  @media screen and (min-width: 1300px) {
    width: 60rem; // 1200 px
  }
`

const Main = styled.main`
  max-width: 100%;
`

const Heading = styled.h1`
  margin-top: 0;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const initialState = {
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

const previousSearch = SearchModel.lastSearch()

const defaultSearch = {
  city1: 'Santa Cruz de Tenerife, ES',
  city2: 'London, GB'
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
    this.cityModel = new CityModel()
    this.updateState = this._updateState.bind(this)
  }

  componentWillMount() {
    if (previousSearch) {
      this._useSearch(previousSearch)
    } else {
      this._useSearch(defaultSearch)
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Section>
          <header>
            <Heading>
              Weather Compare
            </Heading>
          </header>

          <Main>
            <Search
              city1={formatCity(this.state.city1)}
              city2={formatCity(this.state.city2)}
              onSubmit={this.updateState}
            />

            <Cards className='is-size-5'>
              <City city={formatCity(this.state.city1)} />
              <City city={formatCity(this.state.city2)} />
            </Cards>
          </Main>
        </Section>
      </ThemeProvider>
    )
  }

  // private

  _useSearch(search) {
    const { city1, city2 } = search
    this._updateState(city1, city2)
  }

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
