import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchApiPosts} from '../../redux/actions/getApiActions';
import Post from '../Post/Post';

const AllPost = ({allPosts, fetchApiPosts}) => {
    // console.log("other", other);
    useEffect(()=>{
        if(allPosts && allPosts.posts.length < 1){
            fetchApiPosts()
        }
    },[])
    return allPosts.loading ? (
            <h3>Loading...</h3>
        ): allPosts.err ? (
            <h2>{allPosts.err} Err</h2>
        ):  (
        <div>
            {/* <h3>All Posts {posts?.posts.length}</h3> */}
            <div className="row container-fluid p-2  g-3">
                {
                    allPosts && allPosts.posts && allPosts.posts.map(post => <Post post={post} ></Post>)
                }
            </div>

        </div>
    );
};

const mapStateToProps = (state) =>{
    console.log(state, "state")
    return {
        allPosts:state.allPosts
    }
}

const mapDispatchToProps = dispatch => {  
    return{
        fetchApiPosts: ()=> dispatch(fetchApiPosts())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(AllPost);