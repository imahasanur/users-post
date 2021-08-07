import axios from 'axios';
import { fetchPostFail, fetchPostRequest, fetchPostSuccess } from "./getSApiActions";

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';

export const fetchDeleteApi = (id) => {
    return (dispatch) => {
        dispatch(fetchPostRequest)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => {
              console.log("success", res)
              const post = res;
              dispatch(fetchPostSuccess(post))
          })
          .catch(err =>{
              console.log("error ", err)
              const error = err;
              dispatch(fetchPostFail(error))
          })
    }
}