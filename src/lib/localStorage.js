import { oneHour } from './constants'

class LocalStorage {
  constructor() {
    this.cities = this._setCities()
    this.lastSearch = this._setLastSearch()
  }

  hasUpdatedCity(cityName) {
    const anHourAgo = Date.now() - oneHour
    const city = this.cities.filter(city => city.name.includes(cityName))

    if (city[0] === undefined) { return false }

    return city[0].createdAt > anHourAgo
  }

  find(cityName) {
    return this.cities.filter(city => city.name.includes(cityName))[0]
  }

  create(cityData) {
    const cities = [...this.cities]
    const filteredCities = cities.filter(city =>
      !city.name.includes(cityData.name)
    )

    cityData.createdAt = Date.now()

    filteredCities.push(cityData)

    this._updateCities(filteredCities)
  }

  storeSearch(city1Name, city2Name) {
    const search = { city1: city1Name, city2: city2Name }

    this._updateLastSearch(search)
  }

  // private

  _setCities() {
    if (this._available() && localStorage.getItem('cities')) {
      return JSON.parse(localStorage.getItem('cities'))
    } else {
      return []
    }
  }

  _setLastSearch() {
    if (this._available() && localStorage.getItem('lastSearch')) {
      return JSON.parse(localStorage.getItem('lastSearch'))
    } else {
      return []
    }
  }

  _available() {
    try {
      var storage = window['localStorage']
      var x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return e instanceof DOMException && (
        // Everything except Firefox.
        e.code === 22 ||
        // Firefox.
        e.code === 1014 ||
        // Test name field too, because code might not be present
        // everything except Firefox.
        e.name === 'QuotaExceededError' ||
        // Firefox.
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // Acknowledge QuotaExceededError only if there's something already stored.
      storage.length !== 0
    }
  }

  _updateCities(cities) {
    localStorage.setItem('cities', JSON.stringify(cities))
  }

  _updateLastSearch(search) {
    localStorage.setItem('lastSearch', JSON.stringify(search))
  }
}

export default LocalStorage
