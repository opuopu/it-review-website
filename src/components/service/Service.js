import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../Header/Header';
import './service.css'
import banner from '../../img/tab-1.png'

const Service = () => {
    const [courses,setcourses] = useState([])

    useEffect(()=>{

        fetch('/courses.JSON')
        .then(res =>res.json())
        .then(data => setcourses(data))

    },[])
    
    return (
        <div>
            <Header></Header>

            
           
           <Container className="mt-5 service-container">
           <h1 className="text-center service-title">Our all <span className ="text-success"> services</span> </h1>
               <div className="row">
          {
              courses?.map(course =>(


                <div className ="col-md-3 ">
                <div className="col-md-12  shadow">
           <div className="card cards h-80 border ">
             <img src={course.img} className="card-img-top image mx-auto w-100" alt="..."/>
             <div className="card-body text-center">
               <h5 className="card-title">{course.name}</h5>
               <p className ="details">fee: <span>${course.fee}</span></p>
              <p className ="details">duration: <span>{course.duration}</span></p>
              <p className ="details">batch: <span>{course.batch}</span></p>
             <Link to ="/Notfound">
             <button> <i className="fas fa-cart-plus"></i> enroll now</button>
             </Link>
           </div>
               </div>
               </div>
        
           </div>
              ))
          }
            </div>
           </Container>
           <div className ="service-header">
                <h1>How To Change Your Life?</h1>
                <p> provides 100% project oriented training. It means you will do real time client's projects as your assignments. <br/> Mentors will make you involved in dealing with the real client's experience.

</p>
     <img src={banner} alt="" />
            </div>
         
           <Footer></Footer>

        </div>
    );
};

export default Service;