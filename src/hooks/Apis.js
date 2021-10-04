const { useEffect } = require("react")
const { useState } = require("react")

const AllCourses = () =>{
    const[courses,setcourses] = useState([]);


    useEffect(()=>{
        fetch('/courses.JSON')
        .then(res => res.json())
        .then(data => setcourses(data))
    },[])

    return[courses,setcourses]
}
export default AllCourses

