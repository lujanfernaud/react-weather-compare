'use strict'

const oneHour = 60 * 60 * 1000

const cityNotFound = {
  name: '',
  status: 'City not found',
  iconCode: '',
  temp: ''
}

const countryCodeRegExp = /,\s?\w+/

export { oneHour, cityNotFound, countryCodeRegExp }
