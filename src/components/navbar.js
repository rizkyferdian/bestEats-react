import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'

function Navbar() {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best
                    <span className='font-bold'>Eats</span>
                </h1>

                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm'>
                    <p className='bg-black text-white rounded-full px-2 py-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            {/* Search Input */}

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input type="text" placeholder='Search Food' className='bg-transparent p-2 w-full focus:outline-none' />
            </div>

            {/* Cart */}

            <button className='bg-black text-white hidden md:flex items-center rounded-full py-2 px-4 gap-2'>
                <BsFillCartFill size={20} /> Cart
            </button>
        </div>
    )
}

export default Navbar