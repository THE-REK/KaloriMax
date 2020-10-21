import React, { Component } from 'react'
import {  Button, Card, CardBody, CardHeader, Table } from 'reactstrap';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import *as cartActions from "../../redux/actions/cartActions"

class FoodsList extends Component {
    addToCart=(food)=>{
        this.props.actions.addToCart({quantity:1, food})
    }
    render() {
        return (
            <div>
                <Card>
                    <CardHeader><h3>Yemek Listesi</h3></CardHeader>
                    <CardBody>
                    <div style={{
                maxHeight: '350px',
                overflowY: 'auto'
              }}>
                
                <Table bordered height="200">
      <thead >
        <tr>
          <th>#</th>
          <th>Menü</th>
          <th>Yemek</th>
          <th>Kalori</th>
        </tr>
      </thead>
      <tbody >
          {this.props.foods.map(food=>(
              <tr key={food.id}>
          <th scope="row"><Button color="success" onClick={()=>this.addToCart(food)}>+</Button></th>
          <td>{food.foodName}</td>
          <td>{food.foodType}</td>
          <td>{food.calories}</td>
        </tr>
          ))}
        
        
      </tbody>
    </Table>

            </div>
                    </CardBody>
                </Card>
            </div>


            
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}


function mapStateToProps(state){
    return {
        foods:state.changeFoodReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FoodsList);