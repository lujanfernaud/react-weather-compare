'use strict'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function capitalizeCountryCode(countryCode) {
  countryCode = countryCode.replace(' ', '')

  return countryCode.split(',').join(', ').toUpperCase()
}

export { capitalize, capitalizeCountryCode }
