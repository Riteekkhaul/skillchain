import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";
import ReactJsAlert from "reactjs-alert";

const Admin = () => {

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    contact: ""
  });

  const [compId, setcompId] = useState("");
  const [companies, setcompanies] = useState([]);
  const navigate =useNavigate();
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    console.log(formData);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const checkAuth =()=>{
    console.log(localStorage.getItem("cert_token"))
    if(localStorage.getItem("cert_token")==undefined || localStorage.getItem("cert_token")==null ){
      navigate("/admin_login");
    }
    else{
      return
    }
 }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { companyName, email, password, contact } = formData;

    if (!email || !companyName || !contact || !password) {
      setStatus(true);
      setType("warning");
      setTitle("All field are mandatory!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/v1/admin/register_company', {
        companyName, email, password, contact
      });

      console.log(response.data);
      setStatus(true);
      setType("success");
      setTitle("Certificate Created Succesfully!");
      setFormData({
        companyName: "",
        email: "",
        password: "",
        contact: ""
      })

    } catch (error) {
      console.error(error);
      setStatus(true);
      setType("error");
      setTitle("Something Went Wrong");
    }
  };

  const getAllCompanies = async () => {

    try {
      const response = await axios.get('http://localhost:5000/api/v1/admin/getAllCompanies');
      console.log(response.data.companies);
      setcompanies(response.data.companies);
    } catch (error) {
      console.error(error);
      setStatus(true);
      setType("error");
      setTitle("Error in fetching company data!");
    }
  }

  const DeleteCompany=async()=>{
     try {
      const response = await axios.delete(`http://localhost:5000/api/v1/admin/${compId}`);
       console.log(response.data);
       setStatus(true);
       setType("success");
       setTitle("Company / Institute removed Successfully!");
       alert("Company / Institute removed Successfully!");
    } catch (error) {
      console.error(error.message);
      setStatus(true);
      setType("error");
      setTitle("Something Went Wrong");
    }
     setcompId("");
  }

  const logOut=()=>{
    localStorage.clear();
    setStatus(true);
    setType("success");
    setTitle("Logged Out Successfully!");
    navigate("/admin_login")
  }

  useEffect(() => {
    checkAuth();
    getAllCompanies();
  }, [])

  return (
    <>
      <Navbar />
      <div className='flex'>
        <form className="bg-white w-2/5 p-6 rounded-lg m-4 shadow-lg shadow-purple-800/50" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input
              className="w-full border border-gray-400 p-2"
              id="companyName"
              type="text"
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-400 p-2"
              id="email"
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border border-gray-400 p-2"
              id="password"
              type="password"
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Contact
            </label>
            <input
              className="w-full border border-gray-400 p-2"
              id="confirmPassword"
              type="password"
              name='contact'
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
            Register
          </button>
        </form>
        <div className='bg-white w-3/5 p-6 rounded-lg m-4 shadow-lg shadow-purple-800/50'>
          <h2 className='text-gray-700 text-xl font-bold'>Registered Companies / Institute</h2> <br />
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Company ID 
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody>

              {
                companies.map((data) => {
                  return (
                    <tr key={data._id} className="border border-gray">
                      <td className="px-3 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data._id}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {data.companyName}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {data.email}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {data.contact}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>

      <div class="mx-auto mt-4 max-w-xl">
      <form onSubmit={DeleteCompany} class="sm:flex sm:gap-4">
        <div class="sm:flex-1">
          <input
            type="text"
            placeholder="Company's Unique Id"
            onChange={(e)=>setcompId(e.target.value)}
            class="w-full rounded-md border-orange-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none ring focus:ring-yellow-400 focus:ring focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          class="group mt-4 flex w-full items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto" >
          <span class="text-sm font-medium"> Delete </span>
        </button>
         <AiOutlineLogout onClick={logOut} className='fixed bottom-4 right-8 text-red text-4xl pointer' />
      </form>
    </div>
    <ReactJsAlert status={status} type={type}  title={title} Close={() => setStatus(false)}  />
    </>
  );
};

export default Admin;
