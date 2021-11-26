import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../../Home/Navbar/Navbar'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section className="container-fluid row">
           <Sidebar />

           
             <div className='col-md-10 p-4 ' style={{ position: "absolute" ,right: 0 }}>
                 <h1  className='text-center'>this is dashboard</h1>
             </div>
        </section>
    );
};

export default Dashboard;