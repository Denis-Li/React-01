import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders'



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
 

export const initApartments = () => {
    return dispatch => {
        dispatch(setApartmentsStart());
        axios.get( '/apartment.json' )
            .then( response => {
               dispatch(setApartmentsSuccess(response.data));
            } )
            .catch( error => {
                dispatch(setApartmentsFail(error));
            } );
    };


}








// export const setLoaded = payload => ({
//     type: 'SET_LOADED',
//     payload 
// })


// export const fetchPizzas = (sortBy , category ) => (dispatch) => {
//   dispatch(setLoaded(false))
//     axios.get(`/pizzas?${category == null ? '': `category=${category}`  }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
//         dispatch(setPizzas(data));
//     });
// };

// export const setPizzas = (items) => ({
//     type: 'SET_PIZZAS',
//     payload: items,
// });
