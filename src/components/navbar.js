import React, { useState } from 'react'
import { AiOutlineClose, AiFillTag, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'

function Navbar() {

    const [nav, setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
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

            {/* Mobile Menu */}

            <div className={nav ? 'bg-black/80 w-full h-screen fixed z-10 top-0 left-0' : ''}></div>

            {/* Drawer Menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute top-4 right-4 cursor-pointer' />
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>

                {/* List */}
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='flex text-xl py-4 items-center'><TbTruckDelivery className='mr-4' size={25} /> Orders</li>
                        <li className='flex text-xl py-4 items-center'><MdFavorite className='mr-4' size={25} /> Favorites</li>
                        <li className='flex text-xl py-4 items-center'><FaWallet className='mr-4' size={25} /> Wallets</li>
                        <li className='flex text-xl py-4 items-center'><MdHelp className='mr-4' size={25} /> Help</li>
                        <li className='flex text-xl py-4 items-center'><AiFillTag className='mr-4' size={25} /> Promotion</li>
                        <li className='flex text-xl py-4 items-center'><BsFillSaveFill className='mr-4' size={25} /> Best Ones</li>
                        <li className='flex text-xl py-4 items-center'><FaUserFriends className='mr-4' size={25} /> Invite Friend</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar