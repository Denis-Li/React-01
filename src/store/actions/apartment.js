import * as actionTypes from './actionsTypes';


export const fetchApartmentsSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_APARTMENTS_SUCCESS,
        orders: orders,
    }
}

export const fetchApartmentsFail = (error) => {
    return {
        type: actionTypes.FETCH_APARTMENTS_FAIL,
        error: error
    }
}
export const fetchApartmentsStart = () => {
    return {
        type: actionTypes.FETCH_APARTMENTS_START
    }
}

export const fetchApartments = (category) => (dispatch) => {
    dispatch(fetchApartmentrStart())
    axios.get('/apartments?{category === null ? " " : ` category=${category}` }')
        .then(res => {
            const fetchedApartments = [];
            for (let key in res.data) {
                fetchedApartments.push({
                    ...res.data[key],
                    id: key
                });
            }

            dispatch(fetchApartmentsSuccess(fetchedApartments))
        })
        .catch(err => {
            dispatch(fetchApartmentsFail(err))
        });


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
