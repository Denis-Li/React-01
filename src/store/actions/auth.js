import * as actionTypes from './actionsTypes';
import axios from 'axios';
//import fireDb from '../firebase';


export const initialAuth = () => {
    return {
        type: actionTypes.INITIAL_AUTH
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH__SUCCESS,
        token: token,
        userId: userId
    }
}


export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL
    }
}


export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(initialAuth())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvSTGid6W_b3_xpprZLc_92OJKghuQjcY'
        if(!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvSTGid6W_b3_xpprZLc_92OJKghuQjcY'
        }
        axios.post(url, authData)
        .then(response => {
            const expitarionDate = new Date(new Date().getTime() + response.data.expiresIn)
            localStorage.setItem('token' , response.data.idToken )
            localStorage.setItem('userId', response.data.localId )
            localStorage.setItem('expirationDate', expitarionDate )
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            
        })
        .catch(function(error) {
            dispatch(authFail(error)) 
          });

    }

} 