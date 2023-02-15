import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { BiHelpCircle } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav class="flex flex-wrap border bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl pl-8 tracking-tight">Cert-Chain</span>
      </div>
      <div class="flex lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center  lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link
             to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-2xl text-teal-200 hover:text-white mr-4"
          >
            <AiOutlineHome />
          </Link>
          <Link
             to="/help"
            class="block mt-4 lg:inline-block lg:mt-0 text-2xl text-teal-200 hover:text-white mr-4"
          >
            <BiHelpCircle />
          </Link>
          <Link
            to="/mail"
            class="block mt-4 lg:inline-block lg:mt-0 text-2xl text-teal-200 hover:text-white"
          >
          < GoMail />
          </Link>
        </div>
        <div>
          <Link
            to="/company_login"
            class="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 mx-4 lg:mt-0"
          >
            <FaRegBuilding/>
          </Link>
          <Link
            to="/admin_login"
            class="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            <RiAdminLine/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
