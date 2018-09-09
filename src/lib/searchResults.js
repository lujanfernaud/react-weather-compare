'use strict'

import { cityNotFound } from './constants'

const SearchResults = {
  wereValid(city1, city2) {
    return city1.status !== cityNotFound.status &&
      city2.status !== cityNotFound.status
  }
}

export default SearchResults
