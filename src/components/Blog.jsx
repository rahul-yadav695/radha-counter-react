import React from 'react'
import BlogDetails from './BlogDetails'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Blog = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">

        <p className="text-5xl font-bold text-center mb-10">Spiritual Blog</p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          <div className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition">
            <img className="w-full h-60 object-cover" src="https://radhanaamjapcounter.com/assets/images/blog1.png" alt="" />
            <div className="p-5">
              <p className="text-xl font-semibold">How Radha Naam Jap Purifies Thoughts and....</p>
              <p className="text-gray-500 text-sm mt-1">Admin • September 6, 2025</p>
              <p className="text-gray-600 mt-3">Chanting the holy name of Radha is not just a spiritual practice - it is a direct connection with divine...</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition">
            <img className="w-full h-60 object-cover" src="https://radhanaamjapcounter.com/assets/images/blog2.jpg" alt="" />
            <div className="p-5">
              <p className="text-xl font-semibold">Radha Naam Jap for Stress Relief and Anxiety</p>
              <p className="text-gray-500 text-sm mt-1">Admin • September 6, 2025</p>
              <p className="text-gray-600 mt-3">Anxiety and stress affect the mind like constant waves that never let the ocean settle. People search for peace in....</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition">
            <img className="w-full h-60 object-cover" src="https://radhanaamjapcounter.com/assets/images/blog3.png" alt="" />
            <div className="p-5">
              <p className="text-xl font-semibold">Can Radha Naam Jap Attract Success and...</p>
              <p className="text-gray-500 text-sm mt-1">Admin • September 6, 2025</p>
              <p className="text-gray-600 mt-3">The chanting of Radha Naam Jap is not just a devotional practice; it is a pathway that connects the heart...</p>
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4">

        <Link to="/blog/1" className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 cursor-pointer">
          <img className="w-full h-48 object-cover rounded-lg" src="https://radhanaamjapcounter.com/assets/images/blog4.jpg" alt="" />

          <button className="w-40 flex justify-center items-center h-10 bg-blue-600 text-white mt-3 rounded-full text-sm font-semibold">
            Naam Jap Counter
          </button>

          <p className="mt-3 text-gray-800 font-medium">
            Top Free Apps for Radha Naam Jap: Chant with...
          </p>
          <p className='mt-3 text-gray-800 opacity-50'>Admin October 7, 2025</p>
          <p className='mt-3 text-gray-800 opacity-90'> Discover the best free apps to help you with Radha Naam Jap. These apps provide features like digital
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
          <p className='mt-3 text-gray-800 opacity-50'>Admin October 7, 2025</p>
          <p className='mt-3 text-gray-800 opacity-90'> Discover the best free apps to help you with Radha Naam Jap. These apps provide features like digital
          </p>

        </Link>

      </div>

      <Footer/>
    </>
  )
}

export default Blog
