import React from 'react';
import './Post.css';
import user from '../../images/user.jpg'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    console.log(post)
    return (
        <div className="col-md-4 col-10 col-sm-6">
            <div className="card post-card" >
                <Link to={`posts/${post.id}`} style={{color:'black', textDecoration: 'none'}} >
                <img src={user} className="card-img-top user-image " alt="..." />
                <div className="card-body">
                    <h5 className="card-text">{post.title}</h5>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Post;