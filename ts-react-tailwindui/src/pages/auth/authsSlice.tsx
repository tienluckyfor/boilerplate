import { createSlice } from "@reduxjs/toolkit"
import { _slice } from "services/reduxToolkit"
import { apolloClient } from "services"
import gql from "graphql-tag"
import Cookies from "universal-cookie"
const cookies = new Cookies()

export const initialState = {
    reAuth: {},
}

const authsSlice = createSlice({
    name: "auths",
    initialState,
    reducers: {
        setData: (state, { payload }) => {
            state = _slice.setData(initialState, state, payload)
        },
        setMerge: (state, { payload }) => {
            state = _slice.setMerge(initialState, state, payload)
        },
    },
})

export const { setData, setMerge } = authsSlice.actions
export const authsSelector = (state: any) => state.auths
export default authsSlice.reducer

export function setAuth(state: any) {
    return async (dispatch: any) => {
        dispatch(setData(state))
    }
}

export function setAuthMerge(key:string, item:any) {
    return async (dispatch:any) => {
        dispatch(setMerge({ ...{}, [key]: item }))
    }
}

export function authRegister(variables:any) {
    return async (dispatch:any) => {
        dispatch(setData({ reAuth: { isLoading: true, } }))
        const mutationAPI = () => {
            const mutation = gql`
                mutation($name:String!,$email:String!,$password:String!,$password_confirmation:String!) {
                    register(
                        input: {
                            name: $name
                            email: $email
                            password: $password
                            password_confirmation: $password_confirmation
                        }
                    ) {
                        tokens{
                            user{
                                id
                                name
                                email
                            }
                            access_token
                        }
                        status
                    }
                }
            `
            return apolloClient.mutate({
                mutation,
                variables
            })
        }
        try {
            await mutationAPI().then(res => {
                const data = res?.data?.register;
                if(data?.tokens?.access_token){
                    cookies.set(`${process.env.REACT_APP_NAME}-token`,
                        data?.tokens?.access_token,
                { path: '/', expires: new Date(Date.now() + 99999999999) });
                    // return window.location.assign('/');
                }
                dispatch(setMerge({ reAuth: { isLoading: false, data } }))
            })
        } catch (e) {
            dispatch(setMerge({ reAuth: { isLoading: false,  } }))
        }
    }
}
