import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Views/Home';
import OrderDetails from '../Views/OrderDetails';
import OrderCreate from '../Views/OrderCreate';
import OrderList from '../Views/OrderList';
import ProductList from '../Views/ProductList';

const MainRoutes = ()=>{

  return(
    <section>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/produtos' element={ <ProductList /> } />
        <Route path='/pedido' element={ <OrderList /> } />
        <Route path='/pedido/novo' element={ <OrderCreate /> } />
        <Route path='/pedido/1' element={ <OrderDetails/> } />
      </Routes>
    </section>
    
  )
}
export default MainRoutes;
  
