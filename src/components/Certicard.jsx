import React, { useState, useEffect } from "react";

const Certicard = ({ certificates }) => {

    const [certi, setCerti] = useState([]);

    const helper = () => {
        setCerti(certificates);
        //console.log(certi)
    }
    useEffect(() => {
        helper();
    })

    return (
        <div className="grid grid-cols-3 gap-4 mx-4 mt-20">
            {
                certi.map((data) => {
                    return (
                        <div key={data._id}
                            className="block rounded-xl bg-gray-100 border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        >
                            <h2 className="mb-4 text-xl font-bold text-center text-black"> {data.candidateName}</h2>

                            <p className="mt-1 text-sm text-black ">
                                Certificate Id :   {data._id}
                            </p>
                            <button className="text-white font-bold bg-blue-400 py-2 px-4 my-2 cursor-pointer rounded-md ">View</button>
                        </div>
                    )
                })
            }
         </div>
            )
}

            export default Certicard