'use strict'

const oneHour = 60 * 60 * 1000

const cityNotFound = {
  name: '',
  status: 'City not found',
  iconCode: '',
  temp: ''
}

const fetchingState = {
  name: '',
  status: 'Fetching data...',
  iconCode: 'fetching',
  temp: ''
}

const countryCodeRegExp = /,\s?\w+/

export {
  oneHour,
  cityNotFound,
  fetchingState,
  countryCodeRegExp
}
