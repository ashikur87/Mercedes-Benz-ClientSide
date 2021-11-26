import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Services = ({ servicesWork }) => {
    console.log("servicesWork", servicesWork);
    return (

        <div className='col-lg-4 mb-3'>
            <div className="card-section">
                <div className="services-container text-center">
                   

                    {
                        servicesWork.image && <img src={`data:image/jpeg;base64,${servicesWork.image.img}`} />
                    }
                </div>
                <div className="explore-more text-center">
                    <Link to={`/details/${servicesWork._id}`} ><button >Explore More</button></Link>
                </div>
                <div className="caption-post-section text-center">
                    <p> TK.{servicesWork.price}Lac</p>
                    <h4>{servicesWork.title}</h4>
                   
                    <h6>{servicesWork.description}</h6>
                </div>
               
            </div>
        </div>

    );
};

export default Services;