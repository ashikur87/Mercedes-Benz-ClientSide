import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

import { UserContext } from '../../../App';
const Navbar = () => {

    
    const [loggedInUser, setLoggedIn] = useContext(UserContext)


    return (

        <nav class="navbar navbar-expand-lg navbar-light sticky bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <span className='mr-4'><i class="fas fa-car"></i> </span>
                    <span className='customize'>Mercedes-Benz</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav navbar-customize navItem">
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Allservice'>All-Service</Link>
                        </li>
                        <li>
                            <Link to='/testimonial'>Review</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/wellcome'>CustomerSupport</Link>
                        </li>
                        <li>
                            <Link to='/login'>{loggedInUser.email ? <Link to='/home' className='position' onClick={() => setLoggedIn('')}>Sing Out</Link> : 'Sing In'}</Link>
                            <span className='text-white'>Signed in as:</span> <a href="#login">{loggedInUser?.displayName}</a>
                        </li>
                      
                    </ul>
                    
                </div>
            </div>
        </nav>

    );
};

export default Navbar;