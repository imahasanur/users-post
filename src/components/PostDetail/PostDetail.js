import React from 'react';
import './PostDetail.css';
import { useParams } from 'react-router-dom';
import user from '../../images/user.jpg';
import { useEffect } from 'react';
import { fetchApiPost } from '../../redux/actions/getSApiActions';
import { connect } from 'react-redux';

let postId;

const PostDetail = ({post, fetchApiPost}) => {

    let { userPostId } = useParams();
    postId = userPostId;

    useEffect(() => {
        fetchApiPost(userPostId)
    },[])
    
    const {id, title, body} = post.post;

    return post.loading ? (
        <h2> Loading ...</h2>
    ): post.err ? (
        <h2>{post.err}</h2>
    ):(
        <div className="row container-fluid mt-5 p-1" >
            <h4 className="text-center p-1 mb-2 text-decoration-underline">Post Details</h4>
            <div style={{borderRight:'2px solid gray'}} className="col-10 col-sm-4 col-md-5 p-1 d-flex align-items-center justify-content-center">
                <img src={user} alt="avatar" className="img-fluid"  />
            </div>

            <div className="col-10 col-sm-4 col-md-5 p-2">
                <h4>Id : {id} </h4>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    state.insertedPost.post = {};
    state.deletedPost.post = {};
    return {
        post:state.post
    }
}

const mapDispatchToProps = dispatch => {  
    return{
        fetchApiPost: ()=> dispatch(fetchApiPost(postId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);