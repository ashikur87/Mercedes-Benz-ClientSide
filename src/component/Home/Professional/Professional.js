import React from 'react';
import './Professional.css'
import images from '../../../images/ge77.jpg'
const Professional = () => {
    return (
        <section className='Professional-section'>
            <h1 className='text-dark text-center'>Here Our Awesome <span className='text-danger '>Services</span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="pro-img-section">
                            <img src={images} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="professional-topic">
                            <div className="topic">
                                <h3>Let Us Handle Your Screen <span>Professional</span></h3>
                                <p className='text-dark'>A-Class Limousine
                                    Mercedes-Benz car price starts at Rs 41.19 Lakh for the cheapest model which is A-Class Limousine and the price of most expensive model, which is AMG GT starts at Rs 2.64 Crore.Here is 500+ customers and our total service </p>
                            </div>

                            <div className="user-part d-flex">
                                <div className="customer ">
                                    <h1>500+</h1>
                                    <p>Happy Customer</p>
                                </div>

                                <div className="customer">
                                    <h1>16+</h1>
                                    <p>Total Service</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;