import { configureStore } from "@reduxjs/toolkit";
import { NEWQOUTE, SETQUOTES } from "./action";

const appReducer = (state = {qoutes:[], qoute_index: 0, fetchingError: false}, action) => {
    switch(action.type){
        case NEWQOUTE:
            return {
                ...state,
                qoute_index: Math.floor(Math.random() * state.qoutes.length)
            };
        case SETQUOTES:
            return {
                ...state,
                qoutes:action.qoutes
            };
        default:
            return state;
    }
};

export const store = configureStore({
    reducer: appReducer
});
