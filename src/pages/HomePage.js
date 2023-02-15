import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactJsAlert from "reactjs-alert";
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Tabs from '../components/Tabs';
import Typical from 'react-typical'

const HomePage = () => {

  const navigate = useNavigate();
  const [certId, setcertId] = useState("");
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    if (certId.length < 12) {
      setStatus(true);
      setType("warning");
      setTitle(" Please Enter a valid certificate Id");
      return
    }
    localStorage.setItem('certId', JSON.stringify(certId));
    navigate("/verify");
  }

  return (
    <div className='homepage'>
      <Navbar />
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://s3.collegedisha.com/collegedisha/courses/image/Blockchain-Course.webp?tr=w-660,h-286')" }}>
        <div className="flex pl-8 items-center h-full ">
          <div className="bg-white px-8 w-2/5 py-24 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Generate Secure Digital <br />  
             <Typical
               steps={['Academic..', 3000, 'Organizational..', 3000,'Medicle..' ,3000]}
               loop={Infinity}
               wrapper="p"
               className="my-4 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
               
             /> 
             Certificates On-the-go...
             </h1>
            <ReactJsAlert
              status={status} // true or false
              type={type} // success, warning, error, info
              title={title}
              Close={() => setStatus(false)}
            />
            <input
              type="text"
              className="border border-gray-400 p-2 rounded-lg w-full mb-4"
              placeholder="Enter Unique Certificate ID"
              value={certId}
              onChange={(e) => setcertId(e.target.value)}
            />
            <button onClick={handleSubmit} class="px-6 py-2 text-gray-100 rounded bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">View Certificate</button>
          </div>
        </div>
      </div>
    <Features />
    <Services />
    <Stats />
    <Tabs />
    <Testimonials />
    <Footer />
    </div>
  )
}

export default HomePage