import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import './header.css'

export default function Header() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mt-5">
                <p className='title mb-0'>Search properties to send</p>
                <div className="nav-item dropdown filter-wrapper">
                    <a className="nav-link dropdown-toggle active d-flex align-items-center search-bar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Search with Search Bar <MdKeyboardArrowDown className='ms-4 arrow' />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown ps-3">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
