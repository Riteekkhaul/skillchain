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
          <p className='text-center text-xl font-bold pt-4'>Cert-Chain : A Blockchain Based Certificate Generation and Verification Decentralized Web Application</p>
          <p className='text-center'> Developed By :- </p>
      <div className='about-box'>
        <div id='pro'  >  </div>
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