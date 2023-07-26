import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/1.png';
import '../CSS/Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="Navbar navbar navbar-expand-lg bg-body-tertiary sticky-top"> 
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={img1} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/nutrients">
                                    Nutrients
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/News">
                                    Health News
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
