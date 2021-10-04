import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../Header/Header';
import './service.css'
import banner from '../../img/tab-1.png'
import Services from '../services/Services';
import AllCourses from '../../hooks/Apis';


const Service = () => {
//    calling function
    const [courses] = AllCourses()

    
    return (
        <div>
            <Header></Header>

            
           
           <Container className="mt-5 service-container">
           <h1 className="text-center service-title">Our all <span className ="text-success"> services</span> </h1>
               <div className="row">
          {
              courses?.map(course => <Services key={course.id} course={course}></Services>)
          }
            </div>
           </Container>
           <div className ="service-header">
                <h1>Project Based Learning!</h1>
                <p> provides 100% project oriented training. It means you will do real time client's projects as your assignments. <br/> Mentors will make you involved in dealing with the real client's experience.

</p>
     <img src={banner} alt="" />
            </div>
         
           <Footer></Footer>

        </div>
    );
};

export default Service;