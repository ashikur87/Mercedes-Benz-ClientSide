import React, { useEffect, useState } from 'react';
import '../Service/Services.css'

import MakeHomeService from '../MakeHomeService/MakeHomeService';


const HomePageServices = () => {
    const [serviceData, setServiceData] = useState([])





    useEffect(() => {
        fetch("https://gentle-dawn-79844.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServiceData(data.slice(0,6)))
    }, [])

   
    return (
        
            
            <section className='background'>
            
            <div className="container">
            

                {
                    serviceData.length === 0 && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate("-50%,-50%")' }} className="spinner-border text-white my-5" role="status">
                        <span class="visually-hidden"></span> </div>

                }
                <div className="slider-part">
                     
                    <div className="the-service-hading text-center py-5 ">

                        <h1 className='text-dark'>Here Our Awesome <span>Services</span></h1>

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
                                        serviceData.map(servicesWork => <MakeHomeService servicesWork={servicesWork}></MakeHomeService>)
                                    }
                                </div>
                            </div>
                           
                        </div>
                       
                    </div>

                    
                </div>

            </div>

        </section>
        
    );
};

export default HomePageServices;