import React from 'react';
import image from '../../images/aaaaa.jpg'
import './Welcome.css'
import Navbar from '../Home/Navbar/Navbar'
import { Link } from 'react-router-dom';
import maneger from '../../images/photo-1542909192-2f2241a99c9d.jpg'

const Welcome = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='container  '>

                <h2 className='text-center fw-bold m-5 p-5'>Welcome to our Customer Service</h2>
                <div id='About' className='About-us'>

                    <div className='about  my-5 text-center'>
                        
                        <h1 ><u>Contact US:</u></h1>
                        <h1>Manager Information:</h1>
                        <img className='manager ' src={maneger} alt="" />

                        <h3>Name:Md.Ashikur Rahman</h3>
                        <h3>phone:01717693872</h3>
                        <Link className=' fw-bold'>E-mail:ashikur35-2627@diu.edu.bd</Link>
                        <h3>Fax:+44 870 711 3311</h3>
                    </div>
                    </div>
                    <div className='welcome mt-3 mb-5 responsive '>

                        <div >
                            <img src={image} alt="" />
                        </div>
                        <div >
                            <div className=' text-center ' >
                                <h1 className='backgrounds me-3'>Request Your Order</h1>
                                <h1 className='backgrounds me-3 '>Find Car</h1>
                                <h1 className='backgrounds me-3'>Find Location</h1>
                                <h1 className='backgrounds me-3'>Emergency Contact</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default Welcome;