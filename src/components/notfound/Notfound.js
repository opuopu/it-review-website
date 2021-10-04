import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../Header/Header';
import './notfound.css'

const Notfound = () => {
    return (
       <div>
           <Header></Header>
            <div className ="notfound text-center">
         <div className ="">
         <h1 className ="error-title ">Error 404 <br/> Not Found!</h1>
         <p className ="text-center error-details">You may have mis-typed the URL. <br />

Or the page has been removed. <br />
Actually, there is nothing to see here... <br />
Click on the links below to do something, Thanks!</p>

<NavLink to="/home" className="nav-link">

<i className="fas fa-home"></i> go home
</NavLink>

         </div>
         <Footer></Footer>
        </div>
    
       </div>
    );
};

export default Notfound;