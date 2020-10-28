import React, { Component } from 'react'
import { FormGroup, Input, Label, Form, Card, CardHeader, CardBody, Badge} from 'reactstrap'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import * as calorieActions from "../../redux/actions/calorieActions"


class CaloryCalculate extends Component {
     handleSubmit=(event)=>{
         event.preventDefault();
         this.calculateCalorie();
     }
    
     calculateCalorie=()=>{
        if(this.props.forms.gender==="Erkek"){
             var top= 66+ 13.75*this.props.forms.kilo + 5*this.props.forms.boy - 6.8*this.props.forms.yas;
             return top  ;
            
         }else if(this.props.forms.gender==="Kadın"){
            var top2= 66.5+ 13.75*this.props.forms.kilo + 5*this.props.forms.boy - 6.8*this.props.forms.yas;
             return top2;
         }
     }

    
    
    render() {
        return (
            <div style={{
                marginTop:20,
                overflowY: 'auto'
              }}>
                <Card>
                    <CardHeader><h3>Kalori Hesaplama</h3></CardHeader>
                    <CardBody>
                    <Form onSubmit={(event)=>this.props.actions.handleSubmit(event)}>
                    <FormGroup>
                        <Label for="boy">Boyunuz</Label>
                    <Input type="number" name="boy" id="boy" placeholder="Boyunuzu cm Cinsinden Girin" onChange={(event)=>this.props.actions.handleChange(event)}
                    ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="yas">Yaşınız</Label>
                    <Input type="number" name="yas" id="yas" placeholder="Yaşınızı Girin" onChange={(event)=>this.props.actions.handleChange(event)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="kilo">Kilonuz</Label>
                    <Input type="number" name="kilo" id="kilo" placeholder="Kilonuzu Girin" onChange={(event)=>this.props.actions.handleChange(event)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">Cinsiyet</Label>
                    <Input type="select" name="gender" id="gender" onChange={(event)=>this.props.actions.handleChange(event)} >
                        <option>Erkek</option>
                        <option>Kadın</option>
                    </Input>
                    <Input type="submit" onSubmit={(event)=>this.props.actions.handleSubmit(event)} value="Hesapla"></Input>
                    </FormGroup>
                  <h5><Badge>Günlük Kalori İhtiyacı:{this.props.forms.gkm}</Badge>  </h5>
                </Form>
                
                
            
                    </CardBody>
                </Card>
                
                
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            handleChange: bindActionCreators(calorieActions.handleChange, dispatch),
            handleSubmit: bindActionCreators(calorieActions.handleSubmit, dispatch)
        }
    }
}

function mapStateToProps(state){
    return {
       
        forms:state.calorieReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CaloryCalculate);