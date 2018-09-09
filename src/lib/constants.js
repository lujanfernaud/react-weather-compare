'use strict'

const oneHour = 60 * 60 * 1000

const cityNotFound = {
  name: '',
  status: 'City not found',
  iconCode: 'not-found',
  temp: ''
}

const fetching = {
  name: '',
  status: 'Fetching data...',
  iconCode: 'fetching',
  temp: ''
}

const countryCodeRegExp = /,\s?\w+/

export {
  oneHour,
  cityNotFound,
  fetching,
  countryCodeRegExp
}
