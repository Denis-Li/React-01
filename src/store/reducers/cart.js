import * as actionTypes from '../actions/actionsTypes'

const initialState = {
    items: {},
    totalPrice: null,
    totalCount: null

}


const Cart = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_APARTMENT_TO_CART: {
            const currentApartmentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentApartmentItems,
                    totalPrice:action.payload.price,
                },
            }
            return {
                ...state,
                items: newItems,
                totalPrice: 5,
            }

        }
        case actionTypes.REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items
             }
             delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: null
            }
        }

        case actionTypes.CLEAR_CART: {
            return {
                items: {},
                totalPrice: null
            }
        }


        default:
            return state

    }
}

export default Cart