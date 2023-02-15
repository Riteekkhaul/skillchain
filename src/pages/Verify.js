import React, { useRef, useState, useEffect } from 'react';
import Certificate from '../components/Certificate';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Web3 from "web3";
import { abi } from "../utils";

const Verify = () => {

  const navigate = useNavigate();
  const [hide, sethide] = useState(false);
  const [certDetails, setCertDetails] = useState({});
  const [blockData, setblockData] = useState({});

  const PrintCert = () => {
    sethide(true);
    setTimeout(pdf, 3000);
   }

  const pdf = () => {
    window.print();
    sethide(false);
   }

  const getCertData = async () => {

    const certId = JSON.parse(localStorage.getItem('certId'));
    try {
      const response = await axios.post('http://localhost:5000/api/v1/user/getcert', {
        certId
      });
      console.log(response);
      setCertDetails(response.data.cert);
    } catch (error) {
      console.error(error);
      alert("something went wrong...redirecting you to home");
      navigate("/")
    }

    const contractAddress="0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf";
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const contract = new web3.eth.Contract(abi, contractAddress);
    const txReceipt = await contract.methods.getData(certId).call();
    setblockData(txReceipt);
 //   console.log(blockData.candidateName)
  }

  const validateCert=async()=>{
    const certId = JSON.parse(localStorage.getItem('certId'));
    const contractAddress="0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf";
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const contract = new web3.eth.Contract(abi, contractAddress);
    const txnRes = await contract.methods.validateCertificate(certId).call();
    alert(txnRes);
  }

  const InvalidateCert=async()=>{

    const certId = JSON.parse(localStorage.getItem('certId'));
    const contractAddress="0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf";
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const contract = new web3.eth.Contract(abi, contractAddress);
    console.log("reached")
    const txnRes = await contract.methods.invalidateCertificate(certId).send({
      from: "0xcf788751A5C223d667a4a76Fadc9DA1B1a46c2D3",
      gas: 300000
   });
    alert("Invalidated the certificate Successfully");

  }

  const verifyOnEtherscan = () => {
    window.open('https://codingbeautydev.com', '_blank', 'noreferrer');
    window.print();
  }

  useEffect(() => {
    getCertData();
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex h-auto bg-gradient-to-r from-cyan-500 to-blue-500">
        <Certificate certData={certDetails} />
        {hide ? <><span>Not visible bro...</span></> : <>
          <div className="w-96 h-auto mx-8 bg-white border border-black mt-4 mb-20 p-8 box-border">
            <h3> Data Fetched from Blockchain for Certificate Id <span className='font-bold'> {certDetails._id} </span></h3>
            <p> Candidate Name : {blockData.candidateName} </p>    
            <p> Course : {blockData.course}   </p>
            <p> CompanyName : {blockData._companyName}  </p>
            <p> Date : {blockData.date}   </p>
            <p> Duration : {blockData.duration}  </p>
           <button onClick={validateCert} className="px-4 py-2 mt-12 mb-4 ml-16 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Validate Certificate</button><br/>
           <button type="button" onClick={PrintCert} class="text-white bg-blue-700 mt-8 hover:bg-blue-800 focus:ring-4 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
        focus:outline-none dark:focus:ring-blue-800">Print Certificate</button>
            <button type="button" onClick={verifyOnEtherscan} class="focus:outline-none text-white bg-green-700 
        hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mr-2 
        dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Verify Transaction On Etherscan</button>
          </div>
          </>}
      </div>
    </>
  )
}

export default Verify