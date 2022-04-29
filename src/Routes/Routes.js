import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Views/Layoutt'

const MainRoutes = ()=>{

  return(
    <div class="container">
      <Routes>
        <Route path='/' element={ <Layout /> } />
      </Routes>
    </div>
    
  )
}
export default MainRoutes;
  
