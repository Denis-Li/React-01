import { SET_CATEGORY_INDEX } from "../actions/actionsTypes";

const initialState = {
    category: null,
   
}


const filters = (state = initialState, action) => {
        switch(action.type) {
            case SET_CATEGORY_INDEX:
                return {
                    ...state,
                    category: action.index
                }

                default:
                    return state
        }
    
}

export default filters;