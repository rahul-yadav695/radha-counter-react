import React, { useState } from 'react'
import { Link } from "react-router-dom";
import RadhaCounter from './RadhaCounter';

const RadhaNaam = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='bg-black text-white customFont'>
                <div className='max-w-7xl mx-auto flex items-center justify-between p-3'>

                    <img className='w-32' src="https://radhanaamjapcounter.com/assets/images/radha_naam_jaap_header_logo.png" alt="" />

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center gap-6'>
                        <Link to="/" className='px-3 py-2 rounded hover:bg-pink-500 transition-all cursor-pointer'>Home</Link>
                        <Link to="/premanand" className='px-3 py-2 rounded hover:bg-pink-500 transition-all cursor-pointer'>Premanand</Link>
                        <Link to="/radha-krishna" className='px-3 py-2 rounded hover:bg-pink-500 transition-all cursor-pointer'>Radha Krishna</Link>
                        <Link to="/counter" className='px-3 py-2 rounded hover:bg-pink-500 transition-all cursor-pointer'>Naam Jap Counter</Link>
                        <Link to="/blog" className='px-3 py-2 rounded hover:bg-pink-500 transition-all cursor-pointer'>Blog</Link>
                        <button className='bg-pink-600 hover:bg-pink-700 px-4 py-1 rounded'>🎁 Giveaway</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setOpen(!open)} className='md:hidden text-2xl'>☰</button>
                </div>

                {/* Mobile Menu */}
                {open &&
                    <div className='md:hidden flex flex-col gap-4 px-4 pb-4'>
                        <Link to="/" className='hover:text-pink-400 cursor-pointer'>Home</Link>
                        <Link to="/premanand" className='hover:text-pink-400 cursor-pointer'>Premanand</Link>
                        <Link to="/radha-krishna" className='hover:text-pink-400 cursor-pointer'>Radha Krishna</Link>
                        <Link to="/counter" className='hover:text-pink-400 cursor-pointer'>Naam Jap Counter</Link>
                        <Link to="/blog" className='hover:text-pink-400 cursor-pointer'>Blog</Link>
                        <button className='bg-pink-600 hover:bg-pink-700 px-4 py-1 rounded w-fit'>🎁 Giveaway</button>
                    </div>
                }
            </nav>
        </>
    )
}

export default RadhaNaam
