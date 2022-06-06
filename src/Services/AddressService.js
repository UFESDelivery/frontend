import axios from "axios";

class AddressService{

  prefixUrl = 'http://localhost:5000'
  
  async postAddress(address){
    const baseUrl = `${this.prefixUrl}/address/new`
    const response = await axios.post(baseUrl, address).then(res=>{console.log(res.data)});
    return response.data;
  }

  async postCity(city){
    const baseUrl = `${this.prefixUrl}/city/new`
    const response = await axios.post(baseUrl, city).then(res=>{console.log(res.data)});
    return response.data;
  }

  async getState(state){
    const baseUrl = `${this.prefixUrl}/state/get/all`
    const response = await axios.get(baseUrl);
    console.log(response.data.result)
    return response.data.result;
  }
}

export default AddressService;