import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../Views/Index'

const MainRoutes = ()=>{

  return(
    <div class="container">
      <Routes>
        <Route path='/' element={ <Index /> } />
      </Routes>
    </div>
    
  )
}
export default MainRoutes;
  
