import React from 'react';
import { FaFilm } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <FaFilm className="me-2" /> CineBook
                </a>
                <div className="d-flex">
                    <button className="btn btn-outline-light me-2">Login</button>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;