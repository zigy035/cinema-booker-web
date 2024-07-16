import React from 'react';
import { FaFilm, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>
                            <FaFilm className="me-2" /> CineBook
                        </h5>
                        <p>Your ultimate movie booking experience</p>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white">
                                    Movies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Cinemas
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Offers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            <FaPhone className="me-2" /> +1 234 567 890
                        </p>
                        <p>
                            <FaEnvelope className="me-2" /> info@cinebook.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;