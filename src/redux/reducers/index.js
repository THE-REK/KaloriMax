import {combineReducers} from "redux"
import changeFoodReducer from "./changeFoodReducer"
import cartReducer from "./cartReducer"
import calorieReducer from "./calorieReducer"
const rootReducer= combineReducers({
    changeFoodReducer,
    cartReducer,
    calorieReducer
})
export default rootReducer;