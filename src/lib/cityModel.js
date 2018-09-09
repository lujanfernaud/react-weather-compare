import WeatherAPI from './weatherAPI'
import LocalStorage from './localStorage'
import { cityNotFound } from './constants'

class CityModel {
  constructor() {
    this.weatherAPI = new WeatherAPI()
  }

  isUpdated(city) {
    const localStorage = new LocalStorage()

    return localStorage.hasUpdatedCity(city.toLowerCase())
  }

  find(city) {
    const localStorage = new LocalStorage()

    return localStorage.find(city.toLowerCase())
  }

  async create(city) {
    const localStorage = new LocalStorage()

    city = city.toLowerCase()

    const cityData = await this._fetchDataFor(city).catch(() => cityNotFound)

    if (this._cityWasFound(cityData)) {
      cityData.name = cityData.name.toLowerCase()
      localStorage.create(cityData)
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
