import axios from 'axios';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';

export const fetchPostApiRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostApiSuccess = (post) =>{
    return {
        type: FETCH_POST_SUCCESS,
        payload:post
    }
}

export const fetchPostApiFail = (err) =>{
    return {
        type: FETCH_POST_FAIL,
        payload:err
    }
}

export const fetchPostApi = (post) => {
    return (dispatch) => {

        dispatch(fetchPostApiRequest)
        axios.post(`https://jsonplaceholder.typicode.com/posts`,post)
          .then(res => {
              console.log("successfully Posted ", res)
              const post = res.data;
              dispatch(fetchPostApiSuccess(post))
          })
          .catch(err =>{
              console.log("Error ", err)
              const error = err;
              dispatch(fetchPostApiFail(error))
          })
    }
}