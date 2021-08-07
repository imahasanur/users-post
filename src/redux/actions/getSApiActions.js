import axios from 'axios';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';

export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (post) =>{
    return {
        type: FETCH_POST_SUCCESS,
        payload:post
    }
}
export const fetchPostFail = (err) =>{
    return {
        type: FETCH_POST_FAIL,
        payload:err
    }
}


export const fetchApiPost = (id) => {
    return (dispatch) => {
        dispatch(fetchPostRequest)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => {
              console.log("success", res)
              const post = res.data;
              dispatch(fetchPostSuccess(post))
          })
          .catch(err =>{
              console.log("error ", err)
              const error = err;
              dispatch(fetchPostFail(error))
          })
    }
}