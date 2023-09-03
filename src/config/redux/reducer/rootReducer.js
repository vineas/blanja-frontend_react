import { combineReducers } from "redux";
import productReducer from "./productReducer";
import addressReducer from "./addressReducer";

const rootReducer =  combineReducers({
    product : productReducer, 
    address: addressReducer
})

export default rootReducer;