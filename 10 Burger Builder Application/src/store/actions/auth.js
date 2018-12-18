import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const auth = (email, password, isSingup) => {
    return dispath => {
        dispath(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6jDI5rVYr7r_l97i-p3g4QxavkMmrqRA';
        if (!isSingup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA6jDI5rVYr7r_l97i-p3g4QxavkMmrqRA';
        }
        axios.post(url, authData)
            .then(response => {               
                const exipirationDate = new Date().getTime()+response.data.expiresIn*1000;
                localStorage.setItem('token',response.data.idToken);
                localStorage.setItem('expirationDate',new Date(exipirationDate));
                localStorage.setItem('userId',response.data.localId);

                dispath(authSuccess(response.data.idToken, response.data.localId));
                dispath(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {                
                dispath(authFail(err.response.data.error));
            })

    }
}

export const setAuthRedirectPath = (path) =>{
    return{
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

export const authCheckState = () =>{
    return dispatch=>{
        const token=localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate> new Date()){
                const userId=localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000))
            }else{
                dispatch(logout());
            }
            
        }
    }
}