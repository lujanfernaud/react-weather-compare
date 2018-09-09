import LocalStorage from './localStorage'

class SearchModel {
  static storeSearch(city1, city2) {
    new LocalStorage().storeSearch(city1, city2)
  }

  static lastSearch() {
    const localStorage = new LocalStorage()

    if (localStorage.lastSearch.length === 0) { return false }

    return localStorage.lastSearch
  }
}

export default SearchModel
