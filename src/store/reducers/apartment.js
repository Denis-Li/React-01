const initialState = {
    items: [],
     loading: false,
     category: null,
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
          case "SET_CATEGORY_INDEX":
            return {
                ...state,
                category: action.index,
                
              
            }

           
           
       default:
         return state
    }
}
export default apartments