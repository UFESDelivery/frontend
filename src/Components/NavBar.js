import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Assets/logo.svg'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <img src={Logo} alt='' width='30' height='24' onClick={() => navigate('/')}></img>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <a className='nav-link'  onClick={() => navigate('/produtos')}>Produtos</a>
              <a className='nav-link'  onClick={() => navigate('/pedido/novo')}>Realizar Pedido</a>
              <a className='nav-link' onClick={() => navigate('/pedido')}>Vizualizar Pedidos</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;