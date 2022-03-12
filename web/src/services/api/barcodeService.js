import axios from 'axios'

const barcodeService = {

  async getBarcodeInfo(barcode) {
    try {
      const response = await axios.get(`/barcodes/${barcode}`)
      return response.data
    } 
    catch (error) {
      throw error.response.data
    }
  },

  async postBarcodeInfo(info) {
    try {
      const response = await axios.post(`/barcodes/`, info)
      return response.data
    } 
    catch (error) {
      throw error.response.data
    }
  }

}


export default {
  barcode: barcodeService
}
