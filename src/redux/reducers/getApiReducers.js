import {FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS,FETCH_POSTS_FAIL } from "../actions/getApiActions";

const initialState = {
    loading: false,
    posts: [],
    err: ''
}

const getApiReducers = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                err: ''
            }

        case FETCH_POSTS_FAIL:
            return {
                loading: true,
                posts: [],
                err: action.payload
            }

        default:
            return state;
    }
}

export default getApiReducers;