import {FETCH_POST_REQUEST, FETCH_POST_SUCCESS,FETCH_POST_FAIL } from "../actions/delApiActions";

const initialState = {
    loading: false,
    post: {},
    err: ''
}

const delApiReducers = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload,
                err: ''
            }

        case FETCH_POST_FAIL:
            return {
                loading: true,
                post: {},
                err: action.payload
            }

        default:
            return state;
    }
}

export default delApiReducers;