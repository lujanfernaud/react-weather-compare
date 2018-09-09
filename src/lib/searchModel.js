import LocalStorage from './localStorage'

class SearchModel {
  static storeSearch(city1, city2) {
    const localStorage = new LocalStorage()

    localStorage.storeSearch(city1.toLowerCase(), city2.toLowerCase())
  }

  static lastSearch() {
    const localStorage = new LocalStorage()

    if (localStorage.lastSearch.length === 0) { return false }

    return localStorage.lastSearch
  }
}

export default SearchModel
