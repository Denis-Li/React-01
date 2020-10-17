import * as actionTypes from './actionsTypes';
import axios from 'axios';
import fireDb from '../firebase'
import apartment from '../../components/apartment/apartment/Apartment';



export const setApartmentsStart = () => {
    return {
        type: actionTypes.SET_APARTMENTS_START
    }
}


export const setApartmentsSuccess = (items) => {
    return {
        type: actionTypes.SET_APARTMENTS_SUCCESS,
        items: items,
    }
}

export const setApartmentsFail = (error) => {
    return {
        type: actionTypes.SET_APARTMENTS_FAIL,
        error: error
    }
}
 
export const setCategoryIndex = (index ) => {
    return {
        type: actionTypes.SET_CATEGORY_INDEX,
        index: index,
        
    }
}


export const initApartments = () => {
    
    return dispatch => {
        axios.get("https://realestate-84150.firebaseio.com/apartment.json?category=0")
              .then( response => {
                 dispatch(setApartmentsSuccess(response.data));
              } )
              .catch( error => {
                  dispatch(setApartmentsFail(error));
                 
              } );
          }
  }



