import React from 'react';

const OrderCreate = () => {

  return (
    <section>
      <form>
        <div className='form-row row'>
          <div className='col-6'>
            <div className='form-group'>
              <label htmlform='inputName'>Nome Completo</label>
              <input type='text' className='form-control' id='inputName' placeholder='Nome completo'/>
            </div>
            <div className='form-group'>
              <label htmlform='inputEmail'>Email</label>
              <input type='email' className='form-control' id='inputEmail' placeholder='Email'/>
            </div>
            <div className='form-group'>
              <label htmlform='inputCep'>CEP</label>
              <input type='text' className='form-control' id='inputCep' placeholder='(00000-000)'/>
            </div>
            <div className='form-group'>
              <label htmlform='inputAddress'>Endereço</label>
              <input type='text' className='form-control' id='inputAddress' placeholder='Rua, nº 0'/>
            </div>
            <div className='form-group'>
              <label htmlform='inputAddress2'>Complemento</label>
              <input type='text' className='form-control' id='inputAddress2' placeholder='Apartamento, hotel, casa, etc.'/>
            </div>
            <div className='form-group col-md-4'>
              <label htmlform='inputEstado'>Estado</label>
              <select id='inputEstado' className='form-control'>
                <option defaultValue={null}>Escolher...</option>
                <option>ES</option>
                <option>MG</option>
                <option>RJ</option>
                <option>SP</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlform='inputCity'>Cidade</label>
              <input type='text' className='form-control' id='inputCity'/>
            </div>
            <div className='form-group col-md-2'>
              <label htmlform='inputCEP'>CEP</label>
              <input type='text' className='form-control' id='inputCEP'/>
            </div>
            <button type='submit' className='btn btn-primary'>Entrar</button>
          </div>
          <div className='col-6'>
            <div className='form-group'>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' id='gridCheck'/>
                  <label className='form-check-label' htmlform='gridCheck'>Assistente</label>
              </div>
              <div className='form-group'>
                <label htmlform='inputAttendantName'>Nome Completo</label>
                <input type='email' className='form-control' id='inputAttendantName' placeholder='Nome do(a) atendente'/>
              </div>
            </div>
          </div>
          
        </div>
      </form>
    </section>
  );
}

export default OrderCreate;