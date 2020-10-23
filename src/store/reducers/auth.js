

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_AUTH':
            return {
                ...state,
                loading: true
            };
        case 'AUTH__SUCCESS':
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                loading: false
            };
        case 'AUTH_FAIL':
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state
    }



}

export default Auth
