import React, { useEffect, useState } from 'react';
import CustomerService from '../Services/CustomerService'
import AddressService from '../Services/AddressService';

const CustomerForm = () => {

  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState([]);

  // const [customerData, setCustomerData] = useState({
  //   cd_endereco: "",
  //   email_usuario: "",
  //   senha_usuario: "",
  //   nome_usuario: "",
  //   tipo_usuario: 1,
  // });
  // const [cityData, setCityData] = useState({
  //   nome: "",
  //   uf: ""
  // });
  // const [addressData, setAddressData] = useState({
  //   cd_cidade: "",
  //   bairro: "",
  //   logradouro: "",
  //   cep: "",
  //   numero: ""
  //   // complemento: ""
  // });

  const customerData = {
    cd_endereco: null,
    email_usuario: null,
    senha_usuario: null,
    nome_usuario: null,
    tipo_usuario: 1
  };
  const cityData = {
    nome: null,
    uf: null
  };
  const addressData = {
    cd_cidade: null,
    bairro: null,
    logradouro: null,
    cep: null,
    numero: null
    // complemento: ""
  };

  const customerService = new CustomerService();
  const addressService = new AddressService();

  const toggleLoading= ()=>{
    if (loading = false)
      setLoading(!loading);
    else
      setLoading(loading);
  }
  // const handleSubmit = (e)=>{
  //   const newData = {...data};
  //   newData[e.target] = e.target.value;
  //   setData(newData);
  //   console.log(data)
  // }

  const sendForm = async (e, name, uf)=>{
   
    toggleLoading();
    // customerService.postOrder(customerData);
    await addressService.postCity(cityParams(name,uf));
    // addressService.postAddress(addressData);
    toggleLoading();
  }

  const cityParams= (name, uf)=>{
    cityData["nome"] = name;
    cityData["uf"] = uf;
    window.alert(uf.options[uf.seletedIndex].value);
  }
  
  useEffect(()=>{
    async function getStates(){
      toggleLoading();
      setStates(await addressService.getState());
      console.log(states);
      toggleLoading();
    }
    getStates();
  }, []);

  return (
    <section>
      <form onSubmit={()=>sendForm(null, document.querySelector("#inputEstado"))}>
        <div className='form-row row'>
          <div className='col-6'>
            <div className='form-group'>
              <label htmlform='inputName'>Nome Completo</label>
              <input 
                type='text'
                className='form-control'
                id='inputName'
                placeholder='Nome completo'
              />
            </div>
            <div className='form-group'>
              <label htmlform='inputEmail'>Email</label>
              <input
                type='email'
                className='form-control'
                id='inputEmail'
                placeholder='Email'
              />
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

            {/* PostCidade */}
            <div className='form-group col-md-4'>
              <label htmlform='inputEstado'>Estado</label>
              <select id='inputEstado' className='form-control'>
                <option defaultValue={null}>Escolher...</option>

                {!loading && states && states.map((states)=>
                  <option>{states.cd_uf}</option>
                )}
              </select>
            </div>
            <div className='form-group'>
              <label htmlform='inputCity'>Cidade</label>
              <input type='text' className='form-control' id='inputCity'/>
            </div>
            {/* FimPostCidade */}

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

export default CustomerForm;