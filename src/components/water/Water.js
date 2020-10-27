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

class Water extends Component {
  glassFonk = () => {
    var glass = [];
    var bor = Math.ceil(this.props.waters.water * 4);
    for (var i = 0; i < bor; i++) {
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
      <div>
        <Row>
          <Col xs="4">
            <Card style={{ border: "2px solid" }}>
              <CardHeader>
                <h3>Günlük Su İhtiyacı Hesaplama</h3>
              </CardHeader>
              <CardBody>
                <Form
                  onSubmit={(event) => this.props.actions.handleSubmit(event)}
                >
                  <FormGroup>
                    <Label for="kilo">Kilonuz</Label>
                    <Input
                      type="number"
                      name="kilo"
                      id="kilo"
                      placeholder="Kilonuzu Girin"
                      onChange={(event) =>
                        this.props.actions.handleChange(event)
                      }
                    ></Input>
                    <Input
                      type="submit"
                      onSubmit={(event) =>
                        this.props.actions.handleSubmit(event)
                      }
                      value="Hesapla"
                    ></Input>
                  </FormGroup>
                  <h5>Günde {Math.ceil(this.props.waters.water)}Lt Su Tüketmelisin </h5>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="8">
            <Card>
              <CardBody>
                <CardHeader><h3>Günlük {Math.round(this.props.waters.water * 4)} bardak Su İçmelisin</h3></CardHeader>
               {this.glassFonk()}
               <br/><i>Not: Bardakların hacmine göre değişkenlik gösterebilir.</i>
              </CardBody>
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
