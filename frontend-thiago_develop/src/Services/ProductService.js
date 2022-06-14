import hook from "../Shared/hook";
import axios from "axios";

class ProductService{
  //baseUrl= `api/produtos/buscar`;

  // async getAllProduct(){
  //   const response = await axios.get(this.baseUrl);
  //   return response.data.data;
  // }
  prefixUrl = 'http://localhost:5000'

  async getAllProduct(){
    const baseUrl = `${this.prefixUrl}/product/get/all`;
    const response = await axios.get(baseUrl);
    return response.data.result;
  }
  
}

export default ProductService;