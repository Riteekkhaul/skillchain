import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Table from "../components/Table";
import Navbar from '../components/Navbar';
import axios from 'axios';
import Web3 from "web3";
import { abi } from "../utils";
import Modal from "../components/Modal";
import { AiOutlineLogout } from "react-icons/ai";


const Institute = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [companyData, setcompanyData] = useState(JSON.parse(localStorage.getItem('company')));
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  const [formData, setFormData] = useState({
    candidateName: "",
    companyId: companyData._id,
    companyName: companyData.companyName,
    course: "",
    duration: 0,
    date: new Date(),
  });
  const navigate =useNavigate();

  const initWeb3 = async () => {
    // Connect to the Ethereum network
    const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/25e446fb272c4971aa6ea2912eb09e59"));
   // const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];
    
    const RemixContract = new web3.eth.Contract(
      abi,
      "0x42a738d275bCf952cFd3F77037932c6fcD7dee85"  
    );     //0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf   ganache contract  address
    setWeb3(web3);
    setContract(RemixContract);
    // console.log(contract);
  }

  const handleChange = (event) => {
    console.log(formData);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const checkAuth =()=>{

    if(localStorage.getItem("cert_token")==undefined || localStorage.getItem("cert_token")==null ){
      navigate("/company_login");
    }
    else{
      return
    }
 }
 
 const logOut=()=>{
  localStorage.clear();
  alert("Logged Out Successfully!")
  navigate("/company_login")
}

  const fetchCertificates = async () => {

    var companyId = companyData._id;
    //  console.log(companyId);
    if (!companyId) {
      alert("Error in loading company id!");
      return
    }

    try {
      const data = await axios.post('https://skillchain.cyclic.app/api/v1/company/getcertificates', {
        companyId
      });

      const res = data.data;
      setCertificates(res.result);
      console.log(certificates)
    } catch (error) {
      console.error(error);
      alert("Sorry! error in fetching certificates.");
    }

  }

  const fetchNextPage = async (e) => {
    var companyId = companyData._id;
    //  console.log(companyId);
    const skip=e.target.value;
    if (!companyId) {
      alert("Error in loading company id!");
      return
    }
    try {
      const data = await axios.post('https://skillchain.cyclic.app/api/v1/company/getcertificates', {
        companyId,
        skip
      });
      const res = data.data;
      setCertificates(res.result);
      console.log(certificates)
    } catch (error) {
      console.error(error);
      alert("Sorry! error in fetching certificates.");
    }
  }

  const createCert = async (event) => {
    event.preventDefault();
   // console.log(formData);
    const { candidateName, companyId, companyName, course, duration, date } = formData;

    if (!candidateName || !companyName || !companyId || !course || !duration || !date) {
      alert("All fields are compulsory");
      return;
    }

    try {
      const response = await axios.post('https://skillchain.cyclic.app/api/v1/company/create_cert', {
        candidateName, companyId, companyName, course, duration, date,
      });

      console.log(response.data.result);
      alert("Certificate Created Successfully!");
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      console.log(account)

      // publishing on blockchain
      const certificateParams = {
        _certificateID: response.data.result._id,
        _candidateName: response.data.result.candidateName,
        _companyName: response.data.result.companyName,
        _course: response.data.result.course,
        _date: Math.floor(Date.now() / 1000),
        _duration: response.data.result.duration
      }

      const txReceipt = await contract.methods.generateCertificate(
        certificateParams._certificateID,
        certificateParams._candidateName,
        certificateParams._course,
        certificateParams._companyName,
        certificateParams._date,
        certificateParams._duration
      ).send({
        from: account,
        gas: 300000
      });

      console.log('tx receipt :-', JSON.stringify(txReceipt));

      const txn_hash = txReceipt.transactionHash;
      const cert_id = response.data.result._id;
      console.log(txn_hash, cert_id);

      try {
        const data = await axios.put('https://skillchain.cyclic.app/api/v1/company/updatecert', {
          txn_hash, cert_id
        });
        console.log(data.data.result);
      } catch (error) {
        console.error(error);
        alert("Sorry! error in updating certificates.");
      }
      alert("certificate created and published on blockchain successfully.")
      setFormData({
        candidateName: "",
        companyName: "",
        course: "",
        companyId: "",
        duration: "",
        date: ""
      })

    } catch (error) {
      console.error(error);
      alert("Error in publishing certificate on blockchain!");
    }
  }

  useEffect(() => {
    checkAuth();
    initWeb3();
    fetchCertificates();
  }, [])

  return (
    <>
      <Navbar />
      <div>
        <div className="relative max-h-screen grid bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
            <div className="relative sm:w-1/2 xl:w-4/5 md:w-4/5 transparent h-full overflow-auto hidden md:flex flex-auto items-center justify-center text-white bg-no-repeat bg-cover relative" >
              <div className="absolute inset-0 z-0 mt-12 mx-12">
                <button className=" bg-white text-black rounded-lg py-3 w-full font-semibold" >Recentely generated Certificates</button>
              </div>    
              < Table certificates={certificates} />
            </div>
            <div className="md:flex md:items-center md:justify-left sm:w-auto md:h-full xl:w-1/2 10 lg:p-14 sm:rounded-lg md:rounded-none ">
              <div className="max-w-xl w-full space-y-12">
                <div className="lg:text-left text-center">
                  <div className="flex items-center justify-center ">
                    <div className="bg-white flex flex-col w-80 border border-gray-900 rounded-lg px-8 ">
                      <form className="flex flex-col space-y-4" onSubmit={createCert}>
                        <input type="text"
                          name='candidateName'
                          value={formData.candidateName}
                          onChange={handleChange}
                          placeholder="Candidate Name" className="border rounded-lg py-3 px-3 mt-2 bg-black border-indigo-600 placeholder-white-500 text-white" />
                        <input type="text"
                          onChange={handleChange}
                          name='course'
                          value={formData.course} placeholder="Course Name" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                        <input type="text"
                          onChange={handleChange}
                          name='companyName'
                          value={formData.companyName} placeholder="Company / Institute" className="border rounded-lg py-3 px-3 mt-2 bg-black border-indigo-600 placeholder-white-500 text-white" />
                        <input type="number"
                          onChange={handleChange}
                          name='duration'
                          value={formData.duration} placeholder="Course Duration in months" className="border rounded-lg py-3 px-3 mt-2 bg-black border-indigo-600 placeholder-white-500 text-white" />
                        <input type="date"
                          onChange={handleChange}
                          name='date'
                          value={formData.date} placeholder="Date of issue" className="border rounded-lg py-3 px-3 mt-2 bg-white border-indigo-600 placeholder-white-500 text-white" />
                        <button type="submit" className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white rounded-lg py-3 font-semibold" >Create Certificates</button> <br />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
        <AiOutlineLogout onClick={logOut} className='fixed bottom-12 right-8 text-red text-4xl pointer' />
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 pl-20">
        <span className="text-white">Next page :</span>
        <button onClick={fetchNextPage} value="2" className=" bg-gradient-to-r mb-1 from-green-300 via-blue-500 to-purple-600 text-white rounded-lg py-1 px-4 mx-4 font-semibold">2</button>
        <button onClick={fetchNextPage} value="3" className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white rounded-lg py-1 px-4 mx-4 font-semibold">3</button>  
        <button onClick={fetchNextPage} value="4" className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white rounded-lg py-1 px-4 mx-4 font-semibold">4</button>    
        <button onClick={fetchNextPage} value="5"className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white rounded-lg py-1 px-4 mx-4 font-semibold">5</button>
        </div>
      </div>
    </>
  )
}

export default Institute
