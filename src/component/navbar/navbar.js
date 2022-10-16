import React from 'react'
import {MdHomeFilled, MdKeyboardArrowDown} from 'react-icons/md';
import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 py-3 shadow-sm position-fixed w-100">
                <div className="container-fluid">
                    <div className='d-flex align-items-center'>
                        <MdHomeFilled className='logo' />
                        <a className="navbar-brand logo-name" href="#">Estatery</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ps-4 me-auto mb-2 mb-lg-0">
                            <li className="nav-item d-flex align-items-center px-2">
                                <a className="nav-link active nav-items-box" aria-current="page" href="#">Rent</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link active nav-items-box1" aria-current="page" href="#">Buy</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link active nav-items-box1" aria-current="page" href="#">Sell</a>
                            </li>
                            <li className="nav-item dropdown px-3">
                                <a className="nav-link dropdown-toggle active nav-items-box1 d-flex align-items-center " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage Property <MdKeyboardArrowDown size={22} className='ms-2'/>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown ps-3">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown px-3">
                                <a className="nav-link dropdown-toggle active nav-items-box1 d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources <MdKeyboardArrowDown size={22} className='ms-2' />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn login-btn" type="submit">Login</button>
                            <button className="btn sign-btn ms-3" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
