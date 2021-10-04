import React from 'react';
import { Container } from 'react-bootstrap';
import student from '../../img/student.jpeg'
import './review.css'

const Review = () => {
    return (
        <div>

    <Container className ="review">

    <h1>Students <span>review</span></h1>
<div className ="d-flex align-items-center justify-content-around text-start">
<div>
    <h2>Malaika mondol</h2>
    <p className="">hey im malaika mondol.i bought web develompent course.this is really amazing. <br/>
    you can buy 1. they will give you a lot of support. really amazing course. <br/> im totally satisfied.
    </p>
    
</div>
<div>
    <img className="stu-img" src={student} alt="" />
</div>
</div>


    </Container>
            
        </div>
    );
};

export default Review;