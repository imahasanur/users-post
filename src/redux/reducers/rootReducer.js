import {combineReducers} from "redux";
import delApiReducers from "./delApiReducers";
import getApiReducers from './getApiReducers';
import getSApiReducers from './getSApiReducers';
import postApiReducers from "./postApiReducers";

const rootReducer = combineReducers({
    allPosts: getApiReducers,
    post: getSApiReducers,
    insertedPost: postApiReducers,
    deletedPost: delApiReducers
})

export default rootReducer;