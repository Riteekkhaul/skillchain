import React,{useState,useEffect} from 'react';
import Web3 from "web3";
import { abi } from "../utils";


const Modal = ({ isOpen, setIsOpen, currentCert }) => {

  const [blockData, setblockData] = useState({});
  const [isValid, setisValid] = useState(false);
  const [revoked, setrevoked] = useState(false);

  const BlockData=async()=>{
    const contractAddress="0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf";
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const contract = new web3.eth.Contract(abi, contractAddress);
    try {
      const txReceipt = await contract.methods.getData(currentCert._id).call();
      setblockData(txReceipt);
    } catch (error) {
      alert("Error in fetching data for given Cert-Id from Blockchain!")
    }
  }

  const validateCert=async()=>{
    const certId = currentCert._id;
    const contractAddress="0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf";
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const contract = new web3.eth.Contract(abi, contractAddress);
    const txnRes = await contract.methods.validateCertificate(certId).call();
    if(txnRes){
      setisValid(true);
      setrevoked(false);
    }else{
      setrevoked(true);
      setisValid(false);
    }
  }

  const verifyOnEtherscan = () => {
    window.open('https://goerli.etherscan.io/', '_blank', 'noreferrer');
  }

  const InvalidateCert=async()=>{

    const certId =currentCert._id;
    const contractAddress="0xb31e01B6D9C28856DdC51e1127500Ed8EAa204cf";
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    const contract = new web3.eth.Contract(abi, contractAddress);
    const txnRes = await contract.methods.invalidateCertificate(certId).send({
      from: "0xcf788751A5C223d667a4a76Fadc9DA1B1a46c2D3",
      gas: 300000
   });
    alert("Invalidated the certificate Successfully");
    setrevoked(false);
    setisValid(false);
  }
  useEffect(() => {
    BlockData();
  }, [])


  return (
    <>
      {isOpen && (
        <div className="z-99 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div
            className="bg-white rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all mx-12"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline"
          >
         <div className='flex bg-white w-full'>
               {/* certificate */}
            <div id="certcon2" className="w-auto h-auto bg-white border border-black text-center box-border">
              <div className="text-3xl font-bold mt-8">Certificate of Achievement</div>
              <div className="text-lg mt-4">
                This certificate is presented to
                <br />
                <p className="my-2 font-bold">{currentCert.candidateName}  </p>
                for successfully completing the course /program
                <br />
                <strong>{currentCert.course} </strong>
              </div>
              <div className="text-xl font-bold my-4">Certificate ID : {currentCert._id}</div>
              <p className=" mb-4"> txn no. : {currentCert.cert_txn} </p>
              <div className="text-lg italic flex">
                <p className="ml-2 mr-4 mb-4"> Issued on : {currentCert.date} </p>
                <p className="ml-4 mb-4 mr-4">Company : {currentCert.companyName}</p>
              </div>
            </div>
              {/* blockchain Data */}
         
            <div className="w-auto h-auto bg-white mt-4 mb-20 ml-12 ">
             <h3 className='mb-4 bg-gray-200 rounded-md p-4'> Data Fetched from Blockchain for Certificate Id <span className='font-bold'> {currentCert._id} </span></h3>
             <p> Candidate Name : {blockData.candidateName} </p>    
             <p> Course : {blockData.course}   </p>
             <p> CompanyName : {blockData._companyName}  </p>
             <p> Date : {blockData.date} - UNIX epoch-time   </p>
             <p> Duration : {blockData.duration}  </p>
                {
                  isValid?<div className='absolute ml-24'>
                           <img className='w-28 h-28 ml-24' src='https://uploads.sitepoint.com/wp-content/uploads/2015/07/1436013803checkbox-1024x1024.jpg' alt='valid' />
                           <p className='text-green-800 font-bold'>Congratulations! This Certificate is Valid!</p>
                          </div>:<><p></p></>
                }
                {
                  revoked?<div className='absolute ml-24'>
                           <img className='w-28 h-28 ml-24' src='https://luckylucerosbailbonds.com/wp-content/uploads/2020/02/97551323_m.jpg' alt='valid' />
                           <p className='text-red-600 font-bold'>Soory! This Certificate has been Revoked!</p>
                          </div>:<></>
                }
            </div>
            
        </div>
            {/* three buttons */}

            <div className="mt-5 sm:mt-6">
              <button type="button" className="text-white ml-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print Certificate</button>
              <button type="button" className="focus:outline-none text-white ml-20 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Verify Transaction On Etherscan</button>
              <button onClick={validateCert}
              className="px-4 py-2 ml-32 tracking-wide text-white transition-colors duration-200 transform bg-purple-600
              rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-600" >Validate Certificate</button>
              <button onClick={InvalidateCert}
              className="px-4 py-2 mb-4 ml-24 tracking-wide text-white transition-colors duration-200 transform bg-red-600
              rounded-md hover:bg-red-700 focus:outline-none ">INVALIDATE Certificate</button>
              <span className="flex w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Modal