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
                    totalPrice: action.payload.price,
                },
            }
            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            return {
                ...state,
                items: newItems,
                totalPrice: 5,
                totalCount
            }

        }
        case actionTypes.REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items
            }
            // const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return { 
                ...state,
                items: newItems,
                totalPrice: null,
                totalCount: state.totalCount - currentTotalCount

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