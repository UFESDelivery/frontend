import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Routes from '../Routes/Routes';

const Layout = () => {

  return (
    <div>
      <NavBar className='nav' />
      <main className='container'>
        <div className='card-body'>
          <div className='card'>
            <div className='card-body scrollspySite'>
              <Routes />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;