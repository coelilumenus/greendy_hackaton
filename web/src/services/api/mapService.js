import axios from 'axios'

const mapService = {

  async getAddresses() {
    try {
      const response = await axios.get(`/addresses`)
      return response.data
    } 
    catch (error) {
      throw error.response.data
    }
  }

}

export default {
  map: mapService
}
