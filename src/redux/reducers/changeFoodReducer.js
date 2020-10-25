import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeFoodReducer(state = initialState.foods, action) {
  switch (action.type) {
    case actionTypes.GET_FOODS_SUCCESS:

      return action.payload;
     case actionTypes.CHANGE_FOODS:
      let value = action.payload.target.value;
      console.log(value)
      
      
       const newState = state.filter(c =>c.foodName.toLowerCase().includes(value.toLowerCase())
       );

       return newState;
      

    default:
      return state;
  }
}
