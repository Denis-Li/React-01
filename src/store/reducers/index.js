import {combineReducers} from 'redux'
import filterReducer from './filters';
import apartmentReducer from './apartment';
import authReducer from './auth'


const rootReduser = combineReducers({

  apartment: apartmentReducer,
  auth: authReducer

}) 


export default  rootReduser