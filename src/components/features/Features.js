import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../Header/Header';
import heroimg from '../../img/ssmjuniorbanner.png'
import './features.css'

import currimg from '../../img/Interactive-Course Curriculum.jpg'
import supporimg from '../../img/Online-Support-Platform.jpg'
import commimg from '../../img/Large-Community-Group.jpg'
import Review from '../review/Review';

const Features = () => {
    return (
        <div>
            <Header></Header>
            <div className="banner">
            <Container className="">
{/* container header */}
<div className="d-flex align-items-center justify-contect-between features-container ">
    <div >
<h1 className="features-title">Make Your Future Better With opus it institue</h1>
<div className="features-details">to make your future better. please contact with us. <br/>
we want to tech you something for your better future. if you are interested please register now.

</div>

<Link to ="/enroll">
<button>Register now</button>

</Link>
    </div >
<img className="hero-img" src={heroimg} alt="" />

    <div>


    </div>
</div>

            </Container>

{/* next part */}
       
            </div>

            <Container>

<div className="features-part text-center">
<h2>our features</h2>
<h1>Why should you choose opus it institue?</h1>
<p>opus is the country leading ITES Institute working for developing skills to empower the youth. Already it has trained up more than 13 thousand learners in different skills. Professional Experts, Interactive Course Curriculum, Countries First Online Support Platform, Amiable Environment, and many more exciting facilities are available there.</p>
</div>
 </Container>

 {/* card part */}

 <Container>

     <div className ="row  text-center ms-5 mt-5">
<div className="col-md-4">
    
<Card style={{ width: '18rem' }} className="col-md-4 shadow">
  <Card.Img variant="top" src={currimg} />
  <Card.Body>
    <Card.Title className ="text-success">Interactive Course Curriculum</Card.Title>
    <Card.Text  className="card-text">
    opus it institue always focused on updating the course curriculum to adapt to the trend. Dedicated Teachers are spending much time on research and development to provide world-class learning.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
     <div className="col-md-4">
     <Card style={{ width: '18rem' }} className="shadow">
  <Card.Img variant="top" src={supporimg} />
  <Card.Body>
    <Card.Title className ="text-warning">online and offline support</Card.Title>
    <Card.Text  className="card-text">
    Countries First Dedicated opus it institue Online Support Platform has inaugurated by the opus it in earlier 2019. Anyone from anywhere in the world can take live support to solve their problem through our support expert team
    </Card.Text>
   
  </Card.Body>
</Card>
     </div>
     <Card style={{ width: '18rem' }} className="shadow">
  <Card.Img variant="top" src={commimg} />
  <Card.Body>
    <Card.Title className ="text-info">facebook community group</Card.Title>
    <Card.Text className="card-text">
    Already opus it ins build a large community of more than 92 thousand potential students and freelancers on Facebook. Learners can take help and get the latest information from our certified experts on various.
    </Card.Text>
   
  </Card.Body>
</Card>
<Review></Review>

     </div>
 </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default Features;