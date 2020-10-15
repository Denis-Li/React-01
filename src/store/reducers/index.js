import {combineReducers} from 'redux'
import filterReducer from './filters';
import apartmentReducer from './apartment';


const rootReduser = combineReducers({
  filter: filterReducer,
  apartment: apartmentReducer

}) 


export default  rootReduser