import { BrowserRouter, Routes, Route } from "react-router-dom";
import RadhaNaam from "./components/RadhaNaam";
import Home from "./components/RadhaCounter";
import Premanand from "./components/Premanand ";
import RadhaKrishna from "./components/Radha_krishna";
import Counter from "./components/Counter";
import Blog from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
      <RadhaNaam />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premanand" element={<Premanand />} />
        <Route path="/radha-krishna" element={<RadhaKrishna />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import React, { useState } from 'react'

// const App = () => {
//   const [open, setOpen] = useState(false)
//   return (
//     <>
//       <nav>
//         <div className='flex justify-around'>
//           <p className='text-xl font-bold'>Hello</p>

//           <div className='hidden md:flex gap-10'>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//           </div>

//           <div onClick={() => setOpen(!open)} className='cursor-pointer md:hidden'>
//             ☰
//           </div>

//           {open &&<div className='flex flex-col md:hidden gap-10 items-center mt-5'>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//             <p className='text-sm font-semibold hover:text-red-500'>Hyy</p>
//           </div>}
//         </div>
//       </nav>
//     </>
//   )
// }

// export default App

