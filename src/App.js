import React, { Component } from 'react'

import './App.css'
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
  }

  render() {
    return (
      <section class='section'>
        <header>
          <h1 class='main-heading'>Weather Compare</h1>
        </header>

        <main class='main'>
          {/* Search Component */}
          <div class='search'>
            <form action=''>
              <div class='field is-horizontal'>
                <div class='field-body'>
                  <div class='field'>
                    <div class='control'>
                      <input type='text' class='input' id='input-city-1'
                        placeholder='City 1' autofocus required minlength='1' />
                    </div>
                  </div>

                  <div class='field'>
                    <div class='control'>
                      <input type='text' class='input' id='input-city-2'
                        placeholder='City 2' required minlength='1' />
                    </div>
                  </div>

                  <div class='field'>
                    <div class='control'>
                      <button class='button is-primary is-fullwidth' id='submit'>
                        Compare
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class='information is-size-5'>
            <City city={this.state.city1} />
            <City city={this.state.city2} />
          </div>
        </main>
      </section>
    )
  }
}

export default App
