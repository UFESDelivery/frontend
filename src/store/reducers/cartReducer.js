import { ADD_TO_CART } from "../actions/cart-type-actions"
const initState = {
  produtos: [
    {
      "cd_produto": 1,
      "no_produto": "VITAMINA DE ABACAXI",
      "vl_unitario": 7.0,
      "qt_estoque": 10,
      "dt_ultima_alteracao": {
        "dia": 18,
        "mes": 5,
        "ano": 2022,
        "hora": 23,
        "minuto": 3,
        "segundo": 42
      },
      "dt_criacao": {
        "dia": 18,
        "mes": 5,
        "ano": 2022,
        "hora": 23,
        "minuto": 3,
        "segundo": 42
      }
    },
    {
      "cd_produto": 2,
      "no_produto": "VITAMINA DE MORANGO",
      "vl_unitario": 7.0,
      "qt_estoque": 10,
      "dt_ultima_alteracao": {
        "dia": 18,
        "mes": 5,
        "ano": 2022,
        "hora": 23,
        "minuto": 3,
        "segundo": 42
      },
      "dt_criacao": {
        "dia": 18,
        "mes": 5,
        "ano": 2022,
        "hora": 23,
        "minuto": 3,
        "segundo": 42
      }
    }
  ],
  addedItems: [],
  total: 0.0
}

const cartReducer = (state = initState, action) => {
  switch(action.type){
    case ADD_TO_CART:{
      console.log("executando ADD CART")
      let addedItem = state.produtos.find(item=>item.cd_produto == action.id)
      let existed_item = state.addedItems.find(item=>item.cd_produto == action.id)
      if(existed_item){
        addedItem.quantity+=1
        let atualizaTotal = state.total + addedItem.vl_unitario
        return { ...state, total: atualizaTotal }
      }
      else{
        addedItem.quantity = 1;
        let atualizaTotal = state.total + addedItem.vl_unitario
        return {...state, addedItems:[...state.addedItems, addedItem], total: atualizaTotal}
      }
    }
    default:{
      return state;
    }
   
  }
  
}

export default cartReducer;