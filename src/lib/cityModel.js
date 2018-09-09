import WeatherAPI from './weatherAPI'
import LocalStorage from './localStorage'
import { cityNotFound } from './constants'

class CityModel {
  constructor() {
    this.weatherAPI = new WeatherAPI()
  }

  async findOrCreate(city) {
    const localStorage = new LocalStorage()

    city = city.toLowerCase()

    let cityData

    if (localStorage.hasUpdatedCity(city)) {
      cityData = localStorage.find(city)
    } else {
      cityData = await this._fetchDataFor(city).catch(() => cityNotFound)

      if (this._cityWasFound(cityData)) {
        cityData.name = cityData.name.toLowerCase()
        localStorage.create(cityData)
      }
    }

    return cityData
  }

  // private

  _cityWasFound(city) {
    return city.status !== cityNotFound.status
  }

  _fetchDataFor(city) {
    return this.weatherAPI.fetchData(city)
  }
}

export default CityModel
