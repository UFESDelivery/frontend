import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import AtomQuantity from './Atom-quantity';

  const AtomProduct = ({ product })=>{
  const value = product.vl_unitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const [quantity, setQuantity] = useState(0);
  
  const [data, setData] = useState({
    cd_pedido: "1",
    cd_produto: "2",
    qt_itens: "1"
  });
  

  const newFunc = (num)=>{
    setQuantity(num);
    console.log(quantity);
  }

  const enviar = (pedido,produto,quantidade)=>{
    setData({
      cd_pedido: pedido,
      cd_produto: produto,
      qt_itens: quantidade
    });
    console.log(data);
  }
  
  return(
    <div>
      <div className='row'>
        <div className='col'>{product.no_produto}</div>
        <div className='col'><AtomQuantity atualizaQuantidade={newFunc} /></div>
        <div className='col'>{value}</div>
        <div className='col'>Valor Total</div>
        <div className='col'>
          <button
          >
            Adicionar sacola
          </button>
        </div>
      </div>
    </div>
  );
}
export default AtomProduct;