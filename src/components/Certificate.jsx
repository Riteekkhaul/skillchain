import React from "react";
import '../App.css';

function Certificate({certData}){


  return (
    <>
    <div id="certcon" className="w-800 h-600 mt-4 mb-20 mx-auto bg-white border border-black text-center box-border">
      <div className="text-3xl px-24 font-bold mt-4 mb-16">Certificate of Achievement</div>
      <div className="text-lg mb-12">
        This certificate is presented to 
        <br />
        <p className="mt-1 font-bold">{certData.candidateName}  </p>
        <br />
        for successfully completing the course /program
        <br />
        <strong>{certData.course} </strong>
      </div>
      <div className="text-xl font-bold mb-12">Certificate ID : {certData._id}</div>
      <p className="mx-8 mb-4"> txn no. : {certData.cert_txn}</p>
      <div className="text-lg italic flex">
      <p className="ml-4 mb-4"> Issued on : {certData.date} </p>
      <p className="ml-44 mb-4 mr-4">Company : {certData.companyName}</p>
      </div>
     </div>
      </>
  );
}

export default Certificate;
