import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Services = () => {
    const [courses,setcourses] = useState([])
    useEffect(()=>{

        fetch('/courses.JSON')
        .then(res => res.json())
        .then(data => console.log(data))

    },[])
    return (
        <div>
              <div className="row">
                  {
                      courses.map(course => <Service key ={course.id} course ={course}></Service>)
                  }
              </div>
        </div>
    );
};

export default Services;