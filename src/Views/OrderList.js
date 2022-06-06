import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {

  const navigate = useNavigate();

  return (
    <section>
      <form className='row align-items-center'>
        <div className='mb-3 col-4'>
          <label htmlFor='orderDate' className='form-label'>Data</label>
          <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
          <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
        </div>
        <div className='mb-3 col-4'>
          <label htmlFor='orderStatus' className='form-label'>Situação</label>
          <select className='form-select' id='autoSizingSelect'>
            <option defaultValue={"Confirmado"}>Confirmado</option>
            <option value='1'>Pendente</option>
            <option value='2'>Cancelado</option>
            <option value='3'>Todos</option>
          </select>
          <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
        </div>
      </form>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Cliente</th>
            <th scope='col'>Data/Hora</th>
            <th scope='col'>Valor</th>
            <th scope='col'>Status</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>12:30</td>
            <td>R$ 35,00</td>
            <td>Confirmado</td>
            <td><a href='' onClick={() => navigate('/pedido/1')}>Detalhes</a></td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Jacob</td>
            <td>16:12</td>
            <td>R$ 60,00</td>
            <td>Pendente</td>
            <td><a href='' onClick={() => navigate('/pedido/1')}>Detalhes</a></td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Larry</td>
            <td>18:45</td>
            <td>R$ 12,00</td>
            <td>Confirmado</td>
            <td><a href='' onClick={() => navigate('/pedido/1')}>Detalhes</a></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default OrderList;