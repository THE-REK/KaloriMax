import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, Input, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import * as foodActions from "../../redux/actions/foodActions";

class FoodsList extends Component {
  componentDidMount() {
    this.props.actions.getFood();
  }
  addToCart = (food) => {
    this.props.actions.addToCart({ quantity: 1, food });
  };
  selectInput = (event) => {
    if (event.target.value === "") {
      this.props.actions.getFood(event);
    } else {
      this.props.actions.changeFood(event);
    }
  };

  render() {
    return (
      <div>
        <Card style={{ border: "2px solid" }}>
          <CardHeader>
            <h3>Food List</h3>
          </CardHeader>
          <CardBody>
            <div
              style={{
                maxHeight: "450px",
                overflowY: "auto",
              }}
            >
              <Input
                type="text"
                onChange={(event) => this.selectInput(event)}
              />

              <Table bordered height="200">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Menu</th>
                    <th>Kind</th>
                    <th>Calorie</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.foods.map((food) => (
                    <tr key={food.id}>
                      <th scope="row">
                        <Button
                          color="success"
                          onClick={() => this.addToCart(food)}
                        >
                          +
                        </Button>
                      </th>
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
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
      changeFood: bindActionCreators(foodActions.changeFood, dispatch),
      getFood: bindActionCreators(foodActions.getFood, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    foods: state.changeFoodReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);
