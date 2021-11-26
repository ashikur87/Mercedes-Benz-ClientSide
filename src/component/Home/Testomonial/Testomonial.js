import React, { useEffect } from 'react';
import './Testomonial.css'

import TestomonialSection from '../TestomonialSection/TestomonialSection';
import Review from '../../Dashboard/Dshboard/Review/Review';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar'

const Testomonial = () => {
    const [testimonial, setTestimonial] = React.useState([])

    useEffect(() => {

        fetch("https://gentle-dawn-79844.herokuapp.com/addReview")
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    return (
        <section className="testomonial-section">
            <div className="container">
                <Navbar></Navbar>
                {
                    testimonial.length === 0 && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate("-50%,-50%")' }} className="spinner-border text-white my-5" role="status">
                        <span class="visually-hidden"></span> </div>

                }

                <div className="slider-part">
                    <div className="the-service-hading text-center  py-5 ">
                        

                        <h1>Here Our  <span>Testimonials</span></h1>
                        
                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="visibility active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    {
                                        testimonial.map(testimonial => <TestomonialSection testimonial={testimonial}></TestomonialSection>)
                                    }
                                </div>
                            </div>

                        </div>

                    </div>
                    <h6 className='text-center text-danger'>------------------------Please Tell SomeThing------------------------</h6>
                    <Review></Review>
                </div>

            </div>
        </section>
    );
};

export default Testomonial;