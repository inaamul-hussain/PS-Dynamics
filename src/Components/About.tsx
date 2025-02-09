import React from 'react';
import './style.css'
import image from '../assets/cam.jpg'
const About: React.FC = () => {
  return (
   

    <>
      <div className="about">
        <img src={image} className="pic" alt="Camera" />
        <div className="text">
          <h2>About Us</h2>
          <h5>Empowering your vision with cutting-edge technology</h5>
          <p>
            At PX Dynamics, we believe that every moment deserves to be captured with stunning clarity and detail.
          </p>
          <div className="data">
            <a href="#" className="hire">Hire Me</a>
          </div>
        </div>
      </div>
    </>
  );
};


export default About;
