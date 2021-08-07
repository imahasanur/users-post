import { ADD_POST, DELETE_POST } from "../actions/postActions";

const initialState = {
    posts: []
}

const postReducers = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            const newPost = action.post;
            const newPosts = [...state.posts, newPost];
            return {posts: newPosts}
        case DELETE_POST:
            const id = action.id;
            const remainingPosts = state.posts.filter(post => post.id !== id)
            return {posts: remainingPosts}
        default:
            return state;
    }
}

export default postReducers;