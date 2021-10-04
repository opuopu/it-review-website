import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Header from '../Header/Header';
import person from '../../img/hero_layer.png'
import './home.css'
import Footer from '../footer/Footer';
import Service from '../service/Service';
import { Link } from 'react-router-dom';
const Home = () => {
    const [courses,setcourses] = useState([])

    useEffect(()=>{

        fetch('/courses.JSON')
        .then(res =>res.json())
        .then(data => setcourses(data))

    },[])
    return (
        <div>
          
          <Header></Header>
            <div className="home-container">
                <Container>
               <div className ="d-flex align-items-center justify-content-between">
               <div>
                    <h1 className ="title">Change Your Life with <br/> opus it institue</h1>
                    <p className ="title-details">opus it teaches you the skills you need to <br/> thrive and earn online - now and in the future.</p>
                    <p></p>
                 <Link to="/Services">
                 <button className ="view-service">view services</button>
            
                 </Link>
                </div>
                <div>
<img  className =" person" src={person}alt="" />
                </div>
               </div>

           
               
                </Container>

                {/* card part */}

                <Container>
                    <h1 className ="text-center">simple <span className="text-success">overview</span></h1>
                    <div className ="d-flex align-items-center justify-content-around mt-5">
                    <Card border="" className ="bl-1" style={{ width: '20rem' }}>
   <h2><i className="fas fa-user-friends"></i> 4000+ students</h2>
    <Card.Body>
      
      <Card.Text>
      Over 4000+ people are connected with us through social media and supporting our mission.
      </Card.Text>
    </Card.Body>
  </Card>
                    <Card className ="bl-2" style={{ width: '20rem' }}>
   <h2><i className="fas fa-money-check-alt"></i> 12000$+ earned</h2>
    <Card.Body>
      
      <Card.Text>
      Our students has reached the combined earning of $1 million (USD) so far.you also can earn money, please contact us
      </Card.Text>
    </Card.Body>
  </Card>
                    </div>
                </Container>
            </div>


            {/* courses data */}
            <div>
                <Container>
                    <h1 className ="text-center text-success">services</h1>
                     <div className ="row">
                         
                         
                        <div className="col-md-3">
                            <div className="cart">
                            <div className="cart-details">
                  <img className="card-img w-100" src={courses[0]?.img} alt="" />
                </div>
                <div className="text-area text-center ">
                    <h5>{courses[0]?.name}</h5>
                    <p className ="p-0">course fee: ${courses[0]?.fee}</p>
                    <p>vacancy:{courses[0]?.duration}</p>
                    <p>batch: {courses[0]?.batch}</p>
                    <Link to ="/Services">
             <button  className="mb-2"> <i className="fas fa-cart-plus"></i> view all services</button>
             </Link>

                </div>
                            </div>
                        </div>
                         
                        <div className="col-md-3">
                            <div className="cart">
                            <div className="cart-details">
                  <img className="card-img w-100" src={courses[1]?.img} alt="" />
                </div>
                <div className="text-area text-center ">
                    <h5>{courses[1]?.name}</h5>
                    <p className ="p-0">course fee: ${courses[0]?.fee}</p>
                    <p>vacancy:{courses[1]?.duration}</p>
                    <p>batch: {courses[1]?.batch}</p>
                    <Link to ="/Services">
             <button  className="mb-2"> <i className="fas fa-cart-plus"></i> view all services</button>
             </Link>

                </div>
                            </div>
                        </div>
                         
                        <div className="col-md-3">
                            <div className="cart">
                            <div className="cart-details">
                  <img className="card-img w-100" src={courses[2]?.img} alt="" />
                </div>
                <div className="text-area text-center ">
                    <h5>{courses[2]?.name}</h5>
                    <p className ="p-0">course fee: ${courses[0]?.fee}</p>
                    <p>vacancy:{courses[2]?.duration}</p>
                    <p>batch: {courses[2]?.batch}</p>
                    <Link to ="/Services">
             <button  className="mb-2"> <i className="fas fa-cart-plus"></i> view all services</button>
             </Link>

                </div>
                            </div>
                        </div>
                         
                        <div className="col-md-3">
                            <div className="cart">
                            <div className="cart-details">
                  <img className="card-img w-100" src={courses[3]?.img} alt="" />
                </div>
                <div className="text-area text-center ">
                    <h5>{courses[3]?.name}</h5>
                    <p className ="p-0">course fee: ${courses[3]?.fee}</p>
                    <p>vacancy:{courses[3]?.duration}</p>
                    <p>batch: {courses[3]?.batch}</p>
                    <Link to ="/Services">
             <button className="mb-2"> <i className="fas fa-cart-plus"></i> view all services</button>
             </Link>

                </div>
                            </div>
                        </div>

                         

                     </div>
                    

                </Container>
              
            </div>
          <Footer></Footer>
        </div>
    );
};

export default Home;