import {createSlice} from "@reduxjs/toolkit";
import {slice} from "functions/reduxToolkit";
import {apiCodeby, authCodeby} from "configs/apiCodeby";
import Cookies from "universal-cookie";

const cookies = new Cookies()

export const initialState = {
    rAuth: {},
    lAuth: {},
    loAuth: {},
    foAuth: {},
    reAuth: {},
    gMe: {},
};

const authsSlice = createSlice({
    name: "auths",
    initialState,
    reducers: {
        setData: (state, {payload}) => {
            state = slice.setData(initialState, state, payload);
        },
        setMerge: (state, {payload}) => {
            state = slice.setMerge(initialState, state, payload);
        },
    },
});


export const {setData, setMerge} = authsSlice.actions
export const authsSelector = (state) => state.auths
export default authsSlice.reducer

export function setAuth(state) {
    return async (dispatch) => {
        dispatch(setData(state))
    };
}

export function setAuthMerge(key, item) {
    return async (dispatch) => {
        dispatch(setMerge({...{}, [key]: item}))
    }
}

const _getRefUrl = (ref) => {
    try {
        return atob(ref)
    } catch (e) {
    }
    return '/'
}

export function authRegister(variables) {
    return async (dispatch) => {
        dispatch(setData({rAuth: {isLoading: true}}))
        try {
            // const res = await apiCodeby.post('/users/auth-register', variables)
            // dispatch(setMerge({rAuth: {...res, isLoading: false}}))
            // if (res?.users_token) {
            //     cookies.set('ripcode-token', res?.users_token,
            //         {path: '/', expires: new Date(Date.now() + 99999999999)})
            //     window.location.assign(_getRefUrl(variables?.ref))
            // }
            const res = await authCodeby.register(variables)
            dispatch(setMerge({rAuth: {...res, isLoading: false}}))
            if (res?.users_token) {
                window.location.assign(_getRefUrl(variables?.ref))
            }
        } catch (e) {
            dispatch(setMerge({rAuth: {isLoading: false}}))
        }
    }
}

export function authLogin(variables) {
    return async (dispatch) => {
        dispatch(setMerge({lAuth: {isLoading: true}}))
        try {
            // const res = await apiCodeby.post('/users/auth-login', variables)
            // dispatch(setMerge({lAuth: {...res, isLoading: false}}))
            // if (res?.users_token) {
            //     cookies.set('ripcode-token', res?.users_token,
            //         {path: '/', expires: new Date(Date.now() + 99999999999)})
            //     window.location.assign(_getRefUrl(variables?.ref))
            // }
            const res = await authCodeby.login(variables)
            dispatch(setMerge({lAuth: {...res, isLoading: false}}))
            if (res?.users_token) {
                window.location.assign(_getRefUrl(variables?.ref))
            }
        } catch (e) {
            dispatch(setMerge({lAuth: {isLoading: false}}))
        }
    }
}

export function authLogout() {
    return async (dispatch) => {
        dispatch(setData({loAuth: {isLoading: true}}))
        try {
            // if(authCodeby.logout())
            authCodeby.logout()
            window.location.assign('/')
        } catch (e) {
            dispatch(setMerge({loAuth: {isLoading: false}}))
        }
    }
}

export function getMe() {
    return async (dispatch) => {
        dispatch(setMerge({gMe: {isLoading: true}}))
        try {
            const res = await authCodeby.getMe()
            console.log('res', res)
            if (res == 'TOKEN_ERROR') {
                authCodeby.logout()
                window.location.reload()
            }
            dispatch(setMerge({gMe: {...res, isLoading: false}}))
        } catch (e) {
            dispatch(setMerge({gMe: {isLoading: false}}));
        }
    }
}

export function authForgotPassword(user) {
    return async (dispatch) => {
        dispatch(setData({foAuth: {isLoading: true}}))
        try {
        } catch (e) {
            dispatch(setMerge({foAuth: {isLoading: false}}))
        }
    }
}

export function authResetPassword(user) {
    return async (dispatch) => {
        dispatch(setData({reAuth: {isLoading: true}}))
        try {
        } catch (e) {
            dispatch(setMerge({reAuth: {isLoading: false}}))
        }
    }
}

