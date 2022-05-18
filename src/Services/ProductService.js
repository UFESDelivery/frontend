import hook from "../Shared/hook";
import axios from "axios";

class ProductService{
  //baseUrl= `api/produtos/buscar`;

  // async getAllProduct(){
  //   const response = await axios.get(this.baseUrl);
  //   return response.data.data;
  // }
  async getAllProduct(){
    const baseUrl = 'http://localhost:8080/api/produtos/buscar'
    const response = await axios.get(baseUrl);
    return response.data;
  }
  
}

export default ProductService;