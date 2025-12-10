import React from 'react'

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

      
    </>
  )
}

export default Blog
