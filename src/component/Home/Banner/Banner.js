import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <div className="the-heading-part py-4 d-flex align-content-end flex-wrap">
                        <h1>
                        The Mercedes-Benz AG at a glance.
                              </h1>
                        <p>
                        Mercedes-Benz AG is one of the world's largest manufacturers of luxury passenger cars. In 2020, it sold around 2.1 million passenger cars and nearly 375,000 vans. In its two business segments
                             </p><br />
                        <button className="edit">Show Our Gallery</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;