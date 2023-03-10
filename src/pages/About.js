import React from 'react';
import '../styles/about.css';
import{ useNavigate} from 'react-router-dom';

const About = () => {

  const navigate =useNavigate();
  const home =()=>{
    navigate('/skillchain');
  }
  return (
    <div className='about-con'>
      <div className='about-box'>
      <div className='profile-con'>
        <div id='pro'  >  </div>
      </div>
      <div className='bio'>
        <h3>Riteek R. Khaul</h3>
        <p>Email : riteekkhaul1610@gmail.com</p>
        <p>Contact : 9767735958</p>
        <p> Full (MERN) Stack Developer </p>
        <button id='home-btn' onClick={home}>Back To Home</button>
      </div>
      </div> 
    </div>
  )
}

export default About