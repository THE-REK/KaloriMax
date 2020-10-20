import {combineReducers} from "redux"
import changeFoodReducer from "./changeFoodReducer"
import cartReducer from "./cartReducer"

const rootReducer= combineReducers({
    changeFoodReducer,
    cartReducer
})
export default rootReducer;