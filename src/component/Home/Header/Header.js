import React from 'react';
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Professional from '../Professional/Professional';
import Blog from '../Blog/Blog'
import './Header.css'
import Welcome from '../../Welcome/Welcome'
import Footer from '../Footer/Footer';
import HomePageServices from '../HomePageServices/HomePageServices';
const Header = () => {
    return (
        <div>
            <section className='banner'>
                < Navbar></Navbar>
                <Banner></Banner>

            </section>
            <HomePageServices></HomePageServices>
            <Blog />
            <Professional />
            <Welcome></Welcome>
            
            
            <Footer />
        </div>
    );
};

export default Header;