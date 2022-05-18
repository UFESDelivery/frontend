import React, { useState, useEffect } from 'react';
import ProductService from '../Services/ProductService';
import OrderService from '../Services/OrderService';
import Barcode from '../Components/Assets/barcode.svg'
import { AiOutlinePlus, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const ProductList = () => {

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const productService = new ProductService();
  const orderService = new OrderService();

  // const loadProduct = async ()=>{
  //   setLoading(true);
  //   setProduct(productService.getAllProduct());
  //   setLoading(false);
  //   console.log(product);
  // }

  useEffect(()=> {
    async function loadProduct() {
      setLoading(true);
      setProduct(await productService.getAllProduct());
      setLoading(false);
    }
    loadProduct();
  }, []);

  const sendOrder = async ()=>{
    setLoading(true);
    
  }

  // useEffect(()=>{
    
  //   }
  // }, []);

  return (
    <section>
      {/* <p>{quantity}</p>
      <button onClick={()=> setQuantity(quantity)}>ADD</button> */}
      {loading ?
        <p>Carregando</p>
        :
        <div>
        <div className='d-flex justify-content-between'>
          {/* <!-- em nome do usuário vai como exemplo: João Silva. Local de inserção dinâmica --> */}
          <div className=' p-3 m-3'><span className='usuario px-3 py-3'>Usuário</span><span className='user px-3 py-3'>Nome do usuário</span></div>
          {/* <!-- local de inserção dinâmica --> */}
          <div className=' p-3 m-3'><span className='data px-3 py-3'>Data: 22 de Abril 15:31 PM</span></div>
        </div>

      {/* <!-- Container da tabela de produtos --> */}
      <section className='container-fluid px-5 text-center tabela-produtos'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Item</th>
              <th scope='col'>Quantidade</th>
              <th scope='col'>Categoria</th>
              <th scope='col'>Valor unitário</th>
              <th scope='col'>Valor total do item</th>
              <th scope='col'>Adicionar a sacola</th>
            </tr>
          </thead>
          <tbody>

            {/* <!-- Local de inserção da lista de produtos dinâmica (dados preenchidos até o momento apenas para visualização. Exibir apenas se o delivery estiver funcionando) --> */}
            <tr>
              <td>Vitamina de Abacaxi</td>
              <td><span id='menos'><AiOutlineMinusCircle size={22} /></span><span id='valor'><t className='p-2'>1</t></span><span id='mais'><AiOutlinePlusCircle size={22} /></span></td>
              <td>Vitaminas</td>
              <td>7,00 R$</td>
              <td>7,00 R$</td>
              {/* <!-- Condicionamento - se tiver a quantidade deste item definita no segundo td, exibir esse: --> */}
              <td><AiOutlinePlusCircle size={22} /></td>
            </tr>
            {product.map((product) =>
              <tr>
                <td>{product.no_produto}</td>
                <td><span id='menos'><button><AiOutlineMinusCircle size={22} /></button></span><span id='valor'><t className='p-2'>{quantity}</t></span><span id='mais'><AiOutlinePlusCircle size={22} /></span></td>
                <td>Vitaminas</td>
                <td>7,00 R$</td>
                <td>7,00 R$</td>
                {/* <!-- Condicionamento - se tiver a quantidade deste item definita no segundo td, exibir esse: --> */}
                <td><AiOutlinePlusCircle size={22} /></td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <!-- Exibir apenas se o delivery não estiver funcionando --> */}
        {/* <!-- <div className='n-funcioando d-flex justify-content-center flex-column text-center'>
        <div className=''>Lamento mas não estamos funcionando no momento.</div>
        <div className=' font-italic'>Horário de funcionamento: Das 15:00 às 23:59.</div>
      </div> --> */}

        {/* <!-- Exibir apenas se não tiver nenhum produto cadastrado no bd ou a quantidade de todos os produtos estiver zerada --> */}
        {/* <!-- <div className='n-funcioando d-flex justify-content-center flex-column text-center'>
        <div className=''>Lamento mas não há produtos em estoque no momento.</div>
        <div className=' font-italic'>Volte mais tarde.</div>
      </div> --> */}
      </section>

      {/* <!-- Container com tabela de desconto, botão de cadastro de endereço e botão de pagamento --> */}
      <section className='col-12 px-5 d-flex align-items-center'>

        <div className='col-6 pl-5 text-center'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Desconto</th>
                <th scope='col'>%</th>
                <th scope='col'>Valor Total</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Local de inserção dinâmica de descontos (dados inseridos até o momento meramente ilustrativos) --> */}
              <tr>
                <td>Compra acima de 20,00 R$</td>
                <td>5%</td>
                <td>00,00R$</td>
              </tr>
              {/* <!-- Linha delimitante indicando o final da tabela --> */}
            </tbody>
          </table>
        </div>

        {/* <!-- div com botões --> */}
        <div className='col-4 mx-auto d-flex justify-content-around'>
          {/* <!-- botão que ativa o modal cadastrar endereço --> */}
          <button type='button' className='btn btn-secondary' data-toggle='modal' data-target='#modalEndereco'>Cadastrar endereço</button>
          <button type='button' className='btn btn-dark'>Pagar</button>
        </div>

      </section>

      {/* <!-- Modal - Cadastrar endereço --> */}
      <div className='modal fade' id='modalEndereco' tabindex='-1' role='dialog' aria-labelledby='modalEnderecoTitle' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='modalEnderecoTitle'>Cadastrar endereço</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label for='inputPassword4'>Endereço</label>
                    <input type='text' className='form-control' id='endereco' placeholder='Rua 1, 123' />
                  </div>
                </div>
                <div className='form-group'>
                  <label for='inputAddress2'>Complemento</label>
                  <input type='text' className='form-control' id='inputAddress2' placeholder='Ao lado da Praça 1' />
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label for='inputCidade'>cidade</label>
                    <input type='text' className='form-control' id='inputCidade' placeholder='Alegre' />
                  </div>
                  <div className='form-group col-md-4'>
                    <label for='inputEstado'>Estado</label>
                    <select id='inputEstado' className='form-control'>
                      <option selected>Estado...</option>
                      <option>ES</option>
                      <option>MG</option>
                      <option>RJ</option>
                      <option>SP</option>
                    </select>
                  </div>
                  <div className='form-group col-md-2'>
                    <label for='inputCep'>CEP</label>
                    <input type='text' className='form-control' id='inputCep' placeholder='29500-000' />
                  </div>
                </div>
                <p className='text-danger'>Você esqueceu de preencher campos obrigatórios.</p>
                <div className='modal-footer'>
                  <button type='submit' className='btn btn-primary'>Cadastrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Modal - Erro ao adicionar (botão verde) --> */}
      <div className='modal fade' id='naoadicionado' tabindex='-1' role='dialog' aria-labelledby='naoadicionadoTitle' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='naoadicionadoTitle'>Falha ao adicionar à sacola</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              Desculpe, a quantidade que você pediu deste item não tem em estoque.<br />
              {/* <!-- neste span ficará a quantidade de itens, deste produto pedido, em estoque --> */}
              <em>Quantidade em estoque: <span>0</span></em>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Escolher outra opção</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal - Adicionado com sucesso (botão verde) --> */}
      <div className='modal fade' id='adicionadocomsucesso' tabindex='-1' role='dialog' aria-labelledby='adicionadocomsucessoTitle' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='adicionadocomsucessoTitle'>Pedido adicionado à sacola</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              Seu pedido foi adicionado na sua sacola.
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal'>Voltar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      }

    </section>
  );
}

export default ProductList;