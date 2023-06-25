import axios from 'axios'

// eslint-disable-next-line camelcase
const ChikenHouse_API_BASE_URL = 'http://localhost:8080/api/ChikenHouse'

class ChikenHouseService {
  get ChikenHouse () {
    return axios.get(ChikenHouse_API_BASE_URL)
  }
}

export default new ChikenHouseService()
