import React, { Component } from 'react'
import {connect} from "react-redux"
import {  Button, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import *as cartActions from "../../redux/actions/cartActions"



class CartList extends Component {
    render() {
        return (
            <div>
                <h3>Yediklerim</h3>
                <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Menü</th>
          <th>Sayı</th>
          <th>Kalori</th>
        </tr>
      </thead>
      <tbody>
          {this.props.cart.map(cartItem=>(
              <tr key={cartItem.id}>
          <th scope="row"><Button color="danger" onClick={()=>this.props.actions.removeFromCart(cartItem.food)}>X</Button></th>
          <td>{cartItem.food.foodName}</td>
          <td>{cartItem.quantity}</td>
          <td>{cartItem.food.calories}</td>
        </tr>
          ))}
        
        
      </tbody>
    </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state){
    return {
        foods:state.changeFoodReducer,
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartList);