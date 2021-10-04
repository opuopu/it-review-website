import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const{img,name,fee,batch,duration} = props.course || {}
    
    return (
       
            <div className ="col-md-3 ">
                <div className="col-md-12  shadow">
           <div className="card cards h-80 border ">
             <img src={img} className="card-img-top image mx-auto w-100" alt="..."/>
             <div className="card-body text-center">
               <h5 className="card-title">{name}</h5>
               <p className ="details">fee: <span>${fee}</span></p>
              <p className ="details">duration: <span>{duration}</span></p>
              <p className ="details">batch: <span>{batch}</span></p>
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