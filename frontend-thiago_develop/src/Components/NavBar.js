import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Assets/imagens/logo.png'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-white mb-3'>
        <div className='container-fluid'>
          
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav d-flex justify-content-around w-100'>
              <a className='nav-link' onClick={() => navigate('/pedido')}>Visualizar Pedidos</a> 
              <a className='nav-link'  onClick={() => navigate('/pedido/novo')}>Realizar Pedido</a>
              <img src={Logo} alt='' width='100' height='75' onClick={() => navigate('/')}></img>
              <a className='nav-link'  onClick={() => navigate('/produtos')}>Produtos</a>
              <a className='nav-link'  onClick={() => navigate('/')}>A definir</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;