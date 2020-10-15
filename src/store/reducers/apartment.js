const initialState = {
    items: [],
     loading: false,
     error: null
 };



 const apartments = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_APARTMENTS_START':
           return {
              ...state,
              loading: true
           };
       case 'SET_APARTMENTS_SUCCESS':
          return {
             ...state,
             items: action.items,
             loading: false
          };
           
       case 'SET_APARTMENTS_FAIL':
          return {
             ...state,
              loading: false,
              error: action.error  
          };
           
           
       default:
         return state
    }
}
export default apartments