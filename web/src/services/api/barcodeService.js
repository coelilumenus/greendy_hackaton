import axios from 'axios'

const barcodeService = {

  async getBarcodeInfo(barcode) {
    try {
      const response = await axios.get(`https://nikitaguriev.site/api/barcodes/${barcode}`)
      return response.data
    } 
    catch (error) {
      throw error.response.data
    }
  },

  async postBarcodeInfo(info) {
    try {
      const response = await axios.post(`https://nikitaguriev.site/api/barcodes/`, info)
      return response.data
    } 
    catch (error) {
      throw error.response.data
    }
  }

}


export {
  barcodeService
}
