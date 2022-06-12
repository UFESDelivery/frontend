import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

class Home extends Component{
    
  handleClick(id){
      this.props.addToCart(id); 
  }
  
  render(){
    return (
      <div>
        {this.props.produtos.map((item) =>
          <div>
            <div className="card" key={item.cd_produto}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.no_produto}</span>
                {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"> */}
                  <button className='btn btn-primary' onClick={()=>{ this.handleCLick(item.cd_produto) }}>+</button>
                {/* </span> */}
              </div>
              <div className="card-content">
                <p>{item.desc}</p>
                <p><b>Price: {item.vl_unitario}$</b></p>
              </div>
            </div>
          </div>
        )}

      </div >
    );
  }
}

const mapStateToProps = (state) => (
  { produtos: state.produtos }
)

const mapDispatchToProps = (dispatch)=>{
 console.log("executou o map dispach")
  return {addToCart: (codigo)=>{dispatch(addToCart(codigo))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);