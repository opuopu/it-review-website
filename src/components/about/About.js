import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../Header/Header';
import './about.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <Container className="about-container">
         <h1>About Us</h1>
         <p> <span>Opus it institue</span> was founded by like-minded, young and motivated individuals with a vision to take freelancing and remote employment as a career path to 160 million Bangladeshis and to create the employment of 1M Bangladeshis within 2022. We aim to create professionals for the national and international marketplaces by providing world-class smart IT education in Bangladesh. At opus it, we want to establish a sustainable self-dependency through the online employment model all over the 64 districts of Bangladesh. From the inauguration on 17th May 2019 till today, opus it institue has trained 7630+ trainees so far, and it's increasing every day. Our students have reached a combined earning of <span> $1 million (USD)</span>so far. Over <span>320K+ people are connected with us</span>through social media and supporting our mission.</p>

         <br />

         <p>We are the pioneer to launch the First-ever Online Support Center for Everyone absolutely Free. Our online and offline learning platforms along with the support platforms will help one learn technology and creative skills to achieve personal and professional goals. Students can enroll in our courses from anywhere in the world and have access to our wide range of services. Working as a freelancer knows no age limit; having a skill set is enough to start earning from home. With the help of our active, dedicated, committed and passionate Team of Professionals, anyone can develop his/her skills and build a good rapport for thyself and also a freelancer can find the best freelance working opportunities as well as can maintain good affinity with one’s customers and clients by building a strong portfolio.</p>

         <br />


         <p>With combined experience of over 20 years in the industry, we at #opus it insitute help students, leaders, IT and design pros, project managers—anyone in any role—develop web development, creative, and business skills. The mentors at #ShikhbeShobai is well trained. Our senior trainers have a vast experience of teaching as well as hand on experience. We expect our trainers to resolve student’s queries on the spot and help them become professionals.</p>

         <br />

         <h1>our master class mentor</h1>
         <p>With combined experience of over 20 years in the industry, we at #ShikhbeShobai help students, leaders, IT and design pros, project managers—anyone in any role—develop web development, creative, and business skills. The mentors at #ShikhbeShobai is well trained. Our senior trainers have a vast experience of teaching as well as hand on experience. We expect our trainers to resolve student’s queries on the spot and help them become professionals.</p>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;