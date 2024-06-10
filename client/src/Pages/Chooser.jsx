

import React from 'react';


import { Link } from 'react-router-dom';
import farmer from '../assets/farmer.svg'
import del from '../assets/del.svg'
import vendor from '../assets/vendor.png'


function Chooser() {

 
  return (
   
    <div>


<h1 className='text-4xl text-center font-bold'>Choose your Login Role</h1>

    <div className='flex justify-center items-center h-96 md:mt-20 my-50 mt-52'>

      <div className='flex buyer mt-36 mb-20'>
        
        <div className="bg-white shadow-lg p-6 mx-4 my-4 h-80   transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-teal-300 border-double border-2">
        <img src={farmer} alt="" />

          <h2 className="text-2xl font-semibold text-teal-800 mb-4">I'm a Farmer</h2>
          <p className="text-gray-600 mb-4">
            Are you looking for services or products? Click below to start browsing.
          </p>
          <Link to="/login">
            <button
              className="bg-teal-800 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-teal-300 transition-colors mt-12"
                onClick={() => {localStorage.setItem('role', 'farmer')}}
            >
              Login
            </button>
          </Link>
        </div>

        <div className="bg-white  shadow-lg p-6 mx-4 my-4 mb-20 h-80  rounded-lg  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-teal-300 border-double border-2">
          <img src={del} alt="" />
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">I'm a Delivery Agent</h2>
          <p className="text-gray-600 mb-4">
            Do you want to offer your services or products? Click below to get started.
          </p>
          <Link to="/login">
            <button
            onClick={() => {localStorage.setItem('role', 'delivery')}}
              className="bg-teal-800 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-teal-300 transition-colors mt-12"
            >
              Login
            </button>
          </Link>
        </div>
        <div className="bg-white  shadow-lg p-6 mx-4 my-4 mb-20 h-80   rounded-lg  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-teal-300 border-double border-2">
          <img src={vendor} alt="" />
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">I'm a Vendor</h2>
          <p className="text-gray-600 mb-4">
            Do you want to offer your services or products? Click below to get started.
          </p>
          <Link to="/login">
            <button
            onClick={() => {localStorage.setItem('role', 'vendor')}}
              className="bg-teal-800 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-teal-300 transition-colors mt-12"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
 



        
        

        
    </div>
    
    
  );
}

export default Chooser;