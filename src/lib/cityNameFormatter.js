import { countryCodeRegExp } from './constants'
import { capitalize, capitalizeCountryCode } from './utils'

const cityNameFormatter = {
  run(cityName) {
    let countryCode = cityName.match(countryCodeRegExp)

    if (!countryCode) { return cityName }

    cityName = cityName.replace(countryCode, '')
    cityName = cityName.split(' ')
    cityName = cityName.map(string => capitalize(string)).join(' ')

    countryCode = capitalizeCountryCode(countryCode[0])

    return cityName + countryCode
  }
}

function formatCity(city) {
  city = {...city}

  city.name = cityNameFormatter.run(city.name)

  return city
}

export default formatCity
