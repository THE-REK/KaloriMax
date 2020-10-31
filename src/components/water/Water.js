import React, { Component } from "react";
import {
  FormGroup,
  Input,
  Label,
  Form,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as calorieActions from "../../redux/actions/calorieActions";
import Navi from "../navi/Navi";

class Water extends Component {
  glassFonk = () => {
    var glass = [];
    var bor = Math.ceil(this.props.waters.water * 4);
    for (var i = 0; i < bor-1; i++) {
      glass.push(<div style={{float:"left", marginLeft:"20px"}}>
        <h1>
          <i className="fad fa-glass"></i>
        </h1>
      </div>
        
      );
    }
    return glass;
  };

  render() {
    return (
      <div >
        <div >
          <Row>
           <Navi/> 
          </Row>
          
        </div>
        
        <Row style={{marginTop:"50px"}}>
          <Col xs="4">
            <Card style={{ border: "2px solid" }}>
              <CardHeader>
                <h3>Daily Water Needs Calculater</h3>
              </CardHeader>
              <CardBody>
                <Form
                  onSubmit={(event) => this.props.actions.handleSubmit(event)}
                >
                  <FormGroup>
                    <Label for="kilo">Weight</Label>
                    <Input
                      type="number"
                      name="kilo"
                      id="kilo"
                      placeholder="Enter Weight"
                      onChange={(event) =>
                        this.props.actions.handleChange(event)
                      }
                    ></Input>
                    <Input
                      type="submit"
                      onSubmit={(event) =>
                        this.props.actions.handleSubmit(event)
                      }
                      value="Calculate"
                    ></Input>
                  </FormGroup>
                  <h5>Drinking {Math.ceil(this.props.waters.water)}Lt of Water Per Day </h5>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="8">
            <Card>
              <CardBody>
                <CardHeader><h3>Drinking {Math.round(this.props.waters.water * 4)} Glasses of Water Per Day</h3></CardHeader>
              <div>{this.glassFonk()}</div> <br/>
               
               
              </CardBody>
              <CardBody><div ><i>Note: It may vary depending on the volume of the glasses.</i></div></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      handleChange: bindActionCreators(calorieActions.handleChange, dispatch),
      handleSubmit: bindActionCreators(calorieActions.handleSubmit, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    waters: state.waterReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Water);
