import React from 'react';
import { Link } from 'react-router-dom';
import './homes.css'

const Homes = (props) => {
    const{img,name,duration,batch,fee} = props.course ||{}
    return (
        
             <div className="col-md-3">
                            <div className="cart">
                            <div className="cart-details">
                  <img className="card-img w-100" src={img} alt="" />
                </div>
                <div className="text-area text-center ">
                    <h5>{name}</h5>
                    <p className ="p-0">course fee: ${fee}</p>
                    <p>vacancy:{duration}</p>
                    <p>batch: {batch}</p>
                    <Link to ="/Services">
             <button className="mb-2 enroll-btn"> <i className="fas fa-cart-plus"></i> view all services</button>
             </Link>

                </div>
                            </div>
                        </div>
      
    );
};

export default Homes;