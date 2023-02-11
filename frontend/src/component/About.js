import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const About = () => {
  const navigate = useNavigate();
  const callBack = async() => {
    try {
      const res = await axios.get("/info");
      if (!res.status === 200 || !res.status === 201) {
          // window.alert("This is Authorized Page,You have to login first then visit")
      }
    }
    catch (err) {
      navigate("/signin")
    }
  }

  useEffect(() => {
    callBack();
  }, []);

  return (
    <>
  <div class="main_header">
             <div class="main_photo">
                 <img src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png" alt="Plz, Load again" class="myphoto"/>
             </div>
             <div class="header">
                <div class="header_1">
                  <p>Hello, welcome to My weather website</p>
                  <h2>
                    I'm <span>MERN Stack Developer</span> and coder.
                  </h2>
                  <p>
                    For any query related to website and coding contact Me
                  </p>
                  <a class="btn" href="https://www.linkedin.com/in/jil-patel-87a49721b/" target="_Jil" >
                     Contact
                  </a>
                </div>
             </div>
        </div> 
    </>
  );
}
export default About;