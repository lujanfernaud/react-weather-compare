import React, { Component } from 'react'

import './App.css'
import Search from './components/Search'
import City from './components/City/City.jsx'

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
        temp: 25
      }
    }

    this.handleUpdate = this._handleUpdate.bind(this)
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
    console.log('handleUpdate', city1, city2)
  }
}

export default App
