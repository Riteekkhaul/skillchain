import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Help = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
                <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnZ9LcC_6dhSsopJAlUdC8C_SlrAWLs-EkQ&usqp=CAU" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full " />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                <h1 className="text-2xl md:text-2xl xl:text-4xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Problems we solve!</h1>
                    <ul className='list-disc'>
                    <li className="text-base leading-normal text-gray-600 text-center xl:text-left my-4">Increased access to photoshop and digital tools have also increased the fake certificates and documents.</li>
                    <li className="text-base leading-normal text-gray-600 text-center xl:text-left  my-4">A thorough background verification is both costly and time consuming.</li>
                    <li className="text-base leading-normal text-gray-600 text-center xl:text-left  my-4">There's no credibility to one's resume/CV or even online LinkedIn profiles.</li>
                    <li className="text-base leading-normal text-gray-600 text-center xl:text-left  my-4">The counterfeiting cases are on the rise on a month-on-month basis and there's no framework to know the authenticity of the document/certificate.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Help



