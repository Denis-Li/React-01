import * as actionTypes from './actionsTypes';


export  const  addApartmentToCart= (apartObj) => {
    return {
        type: actionTypes.ADD_APARTMENT_TO_CART,
        payload: apartObj
    }
}

export const RemoveItem = (id) =>{
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        payload: id,
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    }
}




 