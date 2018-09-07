import React, { Component } from 'react'
import './App.css'

class App extends Component {
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
            {/* City Component */}
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
                </h2>

                <p class='information-card__status' id='data-status-1'>
                  Fetching data...
                </p>

                <img src='dist/svg/wi-thermometer.svg'
                  class='information-card__icon' id='data-icon-1' />

                <p class='information-card__temperature' id='data-temp-1'>
                </p>
              </div>
            </div>

            {/* City Component */}
            <div class='information-card'>
              <div class='information-card__loader' id='loader-2'>
                <h2 class='information-card__heading is-size-4' id='loader-city-2'>
                </h2>

                <p class='information-card__status' id='loader-status-2'>
                  Fetching data...
                </p>

                <img src='dist/svg/wi-thermometer.svg'
                  class='information-card__icon' />

                <p class='information-card__temperature' id='loader-temp-2'>
                </p>
              </div>

              <div class='information-card__data opacity-1' id='data-2'>
                <h2 class='information-card__heading is-size-4' id='data-city-2'>
                </h2>

                <p class='information-card__status' id='data-status-2'>
                  Fetching data...
                </p>

                <img src='dist/svg/wi-thermometer.svg'
                  class='information-card__icon' id='data-icon-2' />

                <p class='information-card__temperature' id='data-temp-2'>
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default App
