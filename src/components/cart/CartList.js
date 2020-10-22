import React, { Component } from 'react'
import {connect} from "react-redux"
import {  Badge, Button, Card, CardBody, Col, Table, Row, CardHeader } from 'reactstrap';
import { bindActionCreators } from 'redux';
import *as cartActions from "../../redux/actions/cartActions"



class CartList extends Component {
    render() {
        return (
            <Card>
                <CardHeader><h3>Yediklerim</h3></CardHeader>
                <CardBody>
                <div style={{
            maxHeight: '415px',
            overflowY: 'auto'
          }}>
                
                <Table responsive>
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
              <tr key={cartItem.food.id}>
          <th scope="row"><Button color="danger" onClick={()=>this.props.actions.removeFromCart(cartItem.food)}>X</Button></th>
          <td>{cartItem.food.foodName}</td>
          <td>{cartItem.quantity}</td>
          <td>{cartItem.food.calories}</td>
          
        </tr>
        
          ))}
          
          
        
        
      </tbody>
      
    </Table>
    {this.props.cart.length!==0 ? (
              <div>
            <h3>{this.props.forms.gkm<this.props.cart.reduce((a,c)=> a + c.food.calories*c.quantity, 0 )?
            (<div><Badge color="danger">Toplam Kalori:{this.props.cart.reduce((a,c)=> a + c.food.calories*c.quantity, 0 )}</Badge></div>):(
                <div><Badge color="success">Toplam Kalori:{this.props.cart.reduce((a,c)=> a + c.food.calories*c.quantity, 0 )}</Badge></div>
            )
             }  
                </h3> 
          </div>
          ):(<div>
              <Row>
                  <Col xs="12">
                  <Card body outline color="danger" >
                  <CardBody >
                      <h3>Henüz Yemek Yemediniz</h3>
                      <h5><Badge>Toplam Kalori: 0</Badge></h5>
                  </CardBody>
              </Card>
                  </Col>
              </Row>
              
          </div>)}
            </div>

                </CardBody>
            </Card>
           
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
        cart: state.cartReducer,
        forms: state.calorieReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartList);