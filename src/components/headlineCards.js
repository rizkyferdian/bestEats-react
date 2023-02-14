import React from 'react'

function HeadlineCards() {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* cards */}
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>Fried Chicken</p>
                    <p className='px-4'>Through 8/26</p>
                    <button className='border-white ml-2 font-semibold bg-white rounded-full px-4 text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/13795311/pexels-photo-13795311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>French Fries</p>
                    <p className='px-4'>Through 12/26</p>
                    <button className='border-white ml-2 font-semibold bg-white rounded-full px-4 text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-4 pt-4'>Pizza</p>
                    <p className='px-4'>Through 8/26</p>
                    <button className='border-white ml-2 font-semibold bg-white rounded-full px-4 text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

            </div>
        </div>
    )
}

export default HeadlineCards