import * as actionTypes from '../actions/actionsTypes'

const initialState = {
    items: {},
    totalPrice: null,
    totalCount: null

}
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)


const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
      return val[key];
    }, obj[firstKey]);
  };
  
  const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path);
      return sum + value;
    }, 0);
  };
 





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
                    totalPrice: getTotalPrice(currentApartmentItems),
                },
            }
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)
            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }

        }



        case actionTypes.REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return { 
                ...state,
                items: newItems,
                totalPrice: state.totalCount - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount

            }
        }

        case actionTypes.CLEAR_CART: {
            return {
                items: {},
                totalPrice: null,
                totalCount: null
            }
        }

        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                    ...state.items[action.payload].items,
                    state.items[action.payload].items[0],
                  ];
                  const newItems = {
                    ...state.items,
                    [action.payload]: {
                      items: newObjItems,
                      totalPrice: getTotalPrice(newObjItems),
                    },
                  };
   
                  
                  const totalCount = getTotalSum(newItems, 'items.length');
                  const totalPrice = getTotalSum(newItems, 'totalPrice');
                  
                     return {
                       ...state,
                       items: newItems,
                       totalCount,
                       totalPrice,
                     };
         }
         case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
              oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
              ...state.items,
              [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
              },
            };
      
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
      
            return {
              ...state,
              items: newItems,
              totalCount,
              totalPrice,
            };
          }


        default:
            return state

    }
}

export default Cart