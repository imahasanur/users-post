import React from 'react';
import './Post.css';
import user from '../../images/user.jpg'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div className="col-md-4 col-10 col-sm-6">
            <div className="card post-card" >
                <Link to={`posts/${id}`} style={{color:'black', textDecoration: 'none'}} >
                <img src={user} className="card-img-top user-image " alt="..." />
                <div className="card-body">
                    <h4 className="card-text">Id: {id}</h4>
                    <h5 className="card-text">Title: {title}</h5>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Post;