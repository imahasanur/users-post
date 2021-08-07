import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">User Posts</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item p-1">
                        <Link className="nav-link active" aria-current="page" to="/addPost">Add Post</Link>
                    </li>
                    <li className="nav-item p-1">
                        <Link className="nav-link" to="/deletePost">Delete Post</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;