import React, { useState } from 'react';

const AtomProduct = ({ product }) => {
  const value = product.vl_unitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const [quantity, setQuantity] = useState(0);
  
  const increment = ()=>{
    setQuantity(quantity+1);
  }
  const decrement = ()=>{
    if(quantity>0){
      setQuantity(quantity-1);
    }
  }

  const [data, setData] = useState({
    cd_pedido: "1",
    cd_produto: "2",
    qt_itens: "1"
  });


  const newFunc = (num) => {
    setQuantity(num);
    console.log(quantity);
  }

  const enviar = (pedido, produto, quantidade) => {
    setData({
      cd_pedido: pedido,
      cd_produto: produto,
      qt_itens: quantidade
    });
    console.log(data);
  }

  return (
    <tr className='w-100'>
        <td className=''>{product.no_produto}</td>
        <td className=''>
          <td className='d-flex justify-content-center'>
            <button
              onClick={decrement}
              className='icons icon-menos btn btn-sm mx-1'
            >
              -
            </button>
            <p className='mt-1'>{quantity}</p>
            <button
              onClick={increment}
              className='icons btn btn-sm mx-1 px-2'
            >
              +
            </button>
          </td>
        </td>
        <td className=''>{value}</td>
        <td className=''>Valor Total</td>
        <td className=''>
          <button className='btn btn-secondary'
          >
            Adicionar
          </button>
        </td>
    </tr>
  );
}
export default AtomProduct;