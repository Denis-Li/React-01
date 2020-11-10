import {combineReducers} from 'redux'
//import filterReducer from './filters';
import apartmentReducer from './apartment';
import authReducer from './auth'
import cartReducer from './cart'


const rootReduser = combineReducers({

  apartment: apartmentReducer,
  auth: authReducer,
  cart: cartReducer,

}) 


export default  rootReduser