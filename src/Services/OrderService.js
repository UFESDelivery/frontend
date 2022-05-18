import hook from "../Shared/hook";
import axios from "axios";

class OrderService{
  // baseUrl= `api/produtos/buscar`;

  async postOrder(order){
    const baseUrl = 'http://localhost:8080/api/produtos/buscar'
    const response = await axios.post(baseUrl, order).then(res=>{console.log(res.data)});
    return response.data;
  }
  
}

export default OrderService;