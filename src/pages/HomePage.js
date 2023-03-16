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
import Header from '../components/Header';
import Typical from 'react-typical'
import BenefitsRender from '../components/Benefits';

const HomePage = () => {

  return (
    <div className='homepage'>
      <Navbar />
      <Header />
      <Features />
      <Services />
      <Stats />
      <Tabs />
      <BenefitsRender />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage