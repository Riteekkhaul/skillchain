import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactJsAlert from "reactjs-alert";
import Loader from "../components/Loader";

const Company_Login=()=> {
 
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const [loader, setLoader] =useState(false);
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

   const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    //console.log(formData);
  };

  const login = async (event) => {
  event.preventDefault();
  setLoader(true);
  const {email,password} =formData;
  if (!email || !password) {
    setError("Email and password are required");
    return;
  }

  try {
    const response = await axios.post('https://skillchain.cyclic.app/api/v1/company/login', {
      email,password
    });

   // console.log(response.data);
    localStorage.setItem('company', JSON.stringify(response.data.company));
   
     const token  =  response.data.token;
 
     //set JWT token to local
     localStorage.setItem("cert_token", token);
     setStatus(true);
     setType("success");
     setTitle("Logged in success!");
     setLoader(false);
    navigate("/institute");
  } catch (error) {
    console.error(error);
    setStatus(true);
    setType("warning");
    setTitle("Username or Password wrong");
    setLoader(false);
  }
  setError("");
};

  return (
    <>
    <Navbar />
    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div
      class="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
      <h1 class="text-3xl font-semibold text-center text-purple-700">Company / Institute</h1>
      {error && (
         <p className="text-red-500 text-xs italic mb-4">{error}</p>
       )}
      <form class="mt-6" onSubmit={login} >
        <div>
          <label for="email" class="block text-sm text-gray-800" htmlFor="email" >Email</label>
          <input type="email"
            class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 
            focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            id="email"
            name="email"
            value={formData.email}
              onChange={handleChange}
            required
            />
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-gray-800" htmlFor="password" >Password</label>
            <input type="password"
              class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 
              focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              />
          </div>
          <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a>
          <div class="mt-6">
            <button
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </div> 
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <a href="#"
        class="font-medium text-purple-600 hover:underline">Share your Details by mail or Contact Us</a></p>
    </div>
  </div>
  <ReactJsAlert status={status} type={type}  title={title} Close={() => setStatus(false)}  />
  {
      loader ? <Loader /> :<></>
   }  
  </>
  );
}

export default Company_Login;
