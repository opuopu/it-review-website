import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const{course} = props || {}
    
    return (
       
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
     
    );
};

export default Services;