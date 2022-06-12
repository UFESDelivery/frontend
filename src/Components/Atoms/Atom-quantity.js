import React, { useState } from "react";

const AtomQuantity = (props)=>{
  const [quantity, setQuantity] = useState(0);

  const increment = ()=>{
    setQuantity(quantity+1);
    props.atualizaQuantidade(quantity);
  }
  const decrement = ()=>{
    if(quantity>0){
      setQuantity(quantity-1);
      props.atualizaQuantidade(quantity);
    }
  }

  return(
    <div className='d-flex'>
      <button
        onClick={decrement}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
export default AtomQuantity;