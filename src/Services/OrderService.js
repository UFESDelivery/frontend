import hook from "../Shared/hook";
import axios from "axios";

class OrderService{
  prefixUrl = 'http://localhost:5000'

  async getAllOrders(){
    const baseUrl = `${this.prefixUrl}/order/get/all`;
    const response = await axios.get(baseUrl);
    return response.data.result;
  }

  async postOrder(order){
    const baseUrl = `${this.prefixUrl}/order/new`
    const response = await axios.post(baseUrl, order).then(res=>{console.log(res.data)});
    return response.data.result;
  }
  
}

export default OrderService;