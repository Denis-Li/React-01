import * as actionTypes from './actionsTypes';
import axios from 'axios';
import firebase from '../firebase'
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
 

// export const initApars = async () => {
//      const db = firebase.firestore();
//      const data = await db.collection("apartment").get()
   
//     }
// export const initApartments = () => { 
//     return dispatch => {
//            dispatch(setApartmentsStart());
         
//     }
// }

export const initApartments = () => {
    
    return dispatch => {
        
       
        dispatch(setApartmentsStart());
      axios.get("https://realestate-84150.firebaseio.com/apartment.json?category=0")
            .then( response => {
               dispatch(setApartmentsSuccess(response.data));
            } )
            .catch( error => {
                dispatch(setApartmentsFail(error));
               
            } );
        }
    }






