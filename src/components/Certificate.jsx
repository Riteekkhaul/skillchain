import React from "react";
import '../App.css';

function Certificate({ certData }) {
 
  return (
    <>
      <div id="certcon" className="mt-4 mb-20 pt-20 pb-4 mx-auto bg-white border border-black text-center box-border">
        <p className="mt-20 font-bold text-2xl ">{certData.candidateName}  </p>
        <p className="mt-4 ml-4 pl-8 font-bold text-xl capitalize">{certData.course} </p>
        <div className="text-lg mt-16 flex">
          <p className="ml-20 pl-2">  {certData.date} </p>
          <p className="ml-32 capitalize"> {certData.companyName}</p>
        </div>
        <p className=" mt-16 text-gray-600"> {certData._id}</p>
        <p className="text-gray-600 pl-2 mx-20">  {certData.cert_txn}</p>
      </div>
    </>
  );
}

export default Certificate;
