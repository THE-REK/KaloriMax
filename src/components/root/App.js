import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import DashBoard from './DashBoard';
import FoodsList from "../foods/FoodsList"
import {Route, Switch} from "react-router-dom"
import Water from "../water/Water"

function App() {
  return (
    <div>
      <Container>
        <Navi/>
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/foods" exact component={FoodsList} />
          <Route path="/water" exact component={Water} />


          
        </Switch>
        
      </Container>
    </div>
  );
}

export default App;
