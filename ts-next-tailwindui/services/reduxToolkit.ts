import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authsReducer from "hooks/auth/authsSlice";

const reducer = combineReducers({
    auths: authsReducer,
})

export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ serializableCheck: false })
    }
})

/**
 * _slice
 */
export class _slice {
    static setData(initialState: any, state: any, payload: any) {
        Object.entries(initialState).map(([key, value], i) => {
            if (typeof payload[key] !== "undefined") {
                state[key] = payload[key]
            }
        })
        return state
    }

    static setMerge(initialState: any, state: any, payload: any) {
        Object.entries(initialState).map(([key, value], i) => {
            if (typeof payload[key] !== "undefined") {
                state[key] = { ...state[key], ...payload[key] }
            }
        })
        return state
    }
}