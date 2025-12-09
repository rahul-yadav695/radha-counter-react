import React from 'react'
import { Link } from "react-router-dom";

const Counter = () => {
  return (
    <>
      <div className='text-center mt-10'>
        <p className='font-bold text-4xl'>Naam Jap Counter</p>
        <p className='mt-2'>
          Discover the best apps and tools to help you with your Radha Naam Jap practice. Track your progress, 
          <br />
          stay motivated, and connect with devotees worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">

         <Link to="/blog/1" className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 cursor-pointer">
          <img className="w-full h-48 object-cover rounded-lg" src="https://radhanaamjapcounter.com/assets/images/blog4.jpg" alt="" />

          <button className="w-40 flex justify-center items-center h-10 bg-blue-600 text-white mt-3 rounded-full text-sm font-semibold">
            Naam Jap Counter
          </button>

          <p className="mt-3 text-gray-800 font-medium">
            Top Free Apps for Radha Naam Jap: Chant with...
          </p>
        </Link>

         <Link to="/blog/2" className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 cursor-pointer">
          <img className="w-full h-48 object-cover rounded-lg" src="https://radhanaamjapcounter.com/assets/images/blog4.jpg" alt="" />

          <button className="w-40 flex justify-center items-center h-10 bg-blue-600 text-white mt-3 rounded-full text-sm font-semibold">
            Naam Jap Counter
          </button>

          <p className="mt-3 text-gray-800 font-medium">
            Top Free Apps for Radha Naam Jap: Chant with...
          </p>
        </Link>

      </div>
    </>
  )
}

export default Counter
