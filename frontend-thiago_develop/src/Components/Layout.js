import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Routes from '../Routes/Routes';
import { CartProvider } from './Context/CartContext';
import cartReducer  from "../store/reducers/cartReducer";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

const Layout = () => {

  return (
    <Provider store={store}>
      <NavBar className='nav' />
      
        <div className=' scrollspySite'>
          <Routes />
        </div>
     
    </Provider>
  );
}

export default Layout;