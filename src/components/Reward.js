import React from 'react'
import Reward1 from '../../public/images/Reward1.png'
import Reward2 from '../../public/images/Reward2.png'

const Reward = () => {
  return (
    <div className=''>
    <div className='flex flex-col justify-center items-center shadow-lg rounded-xl gap-1'>
            <div className='font-bold text-gray-500'>Cashbacks earned</div>
            <div className='font-bold text-gray-500 text-4xl'>
            ₹507
            </div>
            <p className='text-gray-400 font-bold'>+88 Rs This month</p>
            <div className='flex justify-center items-center mt-4'>
            <button className='bg-red-100 p-2 rounded-lg w-80 font-bold text-pink-600 text-lg mt-4'>View your cashback history</button>
            </div>
            </div>
            <div className='mt-4'>
            <h1 className='font-bold mt-3 mb-3 ml-2'>Scratchcards won</h1>
        <div className='flex flex-row  justify-center items-center gap-2'>
            <div className='bg-red-100 h-20 w-20 rounded-lg'></div>
            <div className='bg-blue-100 h-20 w-20 rounded-lg'></div>
            <div className='bg-green-100 h-20 w-20 rounded-lg'></div>
        </div>
        </div>
        <div className='mt-4'>
            <h1 className='font-bold mt-3 mb-3 ml-2'>Collected Reward</h1>
        <div className='flex flex-row gap-10 bg-green-100 p-2 rounded-lg mt-2'>
            <img src={Reward1.src} />
            <div className='flex flex-col '>
            <h1 className='text-gray-500 font-bold'>FLAT 50 off On Food Delivery</h1>
            <p className='text-gray-400 text-sm'>On orders above 99 on Swaggy, Somato</p>
            <button className='bg-red-100 text-pink-600'>Collect Now</button>
            </div>
        </div>
        <div className='flex flex-row gap-10 bg-green-100 p-2 rounded-lg mt-2'>
            <img src={Reward2.src} />
            <div className='flex flex-col '>
            <h1 className='text-gray-500 font-bold'>20% Cashback On Amason</h1>
            <p className='text-gray-400 text-sm'>Up to Rs 150 Minimum Order 1000</p>
            <button className='bg-red-100 text-pink-600'>Collect Now</button>
            </div>
        </div>
        </div>
            </div>
  )
}

export default Reward