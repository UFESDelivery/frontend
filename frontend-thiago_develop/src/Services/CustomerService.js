import axios from "axios";

class CustomerService{

  prefixUrl = 'http://localhost:5000'

  async getCustomer(id){
    const baseUrl = `${this.prefixUrl}/user/get/client/${id}`;
    const response = await axios.get(baseUrl);
    return response.data.result;
  }
  
  async postCustomer(customer){
    const baseUrl = `${this.prefixUrl}/user/new`
    const response = await axios.post(baseUrl, customer).then(res=>{console.log(res.data)});
    return response.data.result;
  }
}

export default CustomerService;