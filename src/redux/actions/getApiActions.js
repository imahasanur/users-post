import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts) =>{
    return {
        type: FETCH_POSTS_SUCCESS,
        payload:posts
    }
}
export const fetchPostsFail = (err) =>{
    return {
        type: FETCH_POSTS_FAIL,
        payload:err
    }
}

export const fetchApiPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
              console.log("success", res)
              const posts = res.data;
              dispatch(fetchPostsSuccess(posts))
          })
          .catch(err =>{
              console.log("error ", err)
              const error = err;
              dispatch(fetchPostsFail(error))
          })
    }
}
