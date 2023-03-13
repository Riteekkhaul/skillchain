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
  const [validated, setvalidated] = useState(false);
  const [isValid, setisValid] = useState(false);
  const [revoked, setrevoked] = useState(false);

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
      const response = await axios.post('https://skillchain.cyclic.app/api/v1/user/getcert', {
        certId
      });
      console.log(response);
      setCertDetails(response.data.cert);
    } catch (error) {
      console.error(error);
      alert("something went wrong...redirecting you to home");
      navigate("/skillchain");
    }

    const contractAddress="0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf";
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const contract = new web3.eth.Contract(abi, contractAddress);
    try {
      const txReceipt = await contract.methods.getData(certId).call();
      setblockData(txReceipt);
    } catch (error) {
      alert("Error in fetching data for given Cert-Id from Blockchain!")
    }

  }

  const validateCert=async()=>{
    const certId = JSON.parse(localStorage.getItem('certId'));
    const contractAddress="0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf";
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const contract = new web3.eth.Contract(abi, contractAddress);
    const txnRes = await contract.methods.validateCertificate(certId).call();
    if(txnRes){
      setvalidated(true);
      setisValid(true);
    }else{
      setvalidated(true);
      setrevoked(true);
    }
  }


  const verifyOnEtherscan = () => {
    window.open('https://goerli.etherscan.io/', '_blank', 'noreferrer');
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
            <h3 className='mb-4 bg-gray-200 rounded-md px-2'> Data Fetched from Blockchain for Certificate Id <span className='font-bold'> {certDetails._id} </span></h3>
            <p> Candidate Name : {blockData.candidateName} </p>    
            <p> Course : {blockData.course}   </p>
            <p> CompanyName : {blockData._companyName}  </p>
            <p> Date : {blockData.date} - UNIX epoch-time   </p>
            <p> Duration : {blockData.duration}  </p>
            {
              validated? <>
                {
                  isValid?<>
                           <img className='w-28 h-28 ml-24' src='https://uploads.sitepoint.com/wp-content/uploads/2015/07/1436013803checkbox-1024x1024.jpg' alt='valid' />
                           <p className='text-green-800 font-bold'>Congratulations! This Certificate is Valid!</p>
                          </>:<></>
                }
                {
                  revoked?<>
                           <img className='w-28 h-28 ml-24' src='https://luckylucerosbailbonds.com/wp-content/uploads/2020/02/97551323_m.jpg' alt='valid' />
                           <p className='text-red-600 font-bold'>Soory! This Certificate has been Revoked!</p>
                          </>:<></>
                }
              </>
               :
              <button onClick={validateCert} 
              className="px-4 py-2 mt-8 mb-4 ml-16 tracking-wide text-white transition-colors duration-200 transform bg-purple-700
              rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">Validate Certificate</button>
            }
           <br/>
           <button type="button" onClick={PrintCert} class="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 
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