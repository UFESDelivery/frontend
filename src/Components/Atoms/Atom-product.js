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
    <div>
      <div className='row'>
        <div className='col'>{product.no_produto}</div>
        <div className='col'>
          <div className='d-flex'>
            <button
              onClick={decrement}
              className='btn btn-light btn-sm'
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={increment}
              className='btn btn-light btn-sm'
            >
              +
            </button>
          </div>
        </div>
        <div className='col'>{value}</div>
        <div className='col'>Valor Total</div>
        <div className='col'>
          <button className='btn btn-secondary'
          >
            Adicionar sacola
          </button>
        </div>
      </div>
    </div>
  );
}
export default AtomProduct;