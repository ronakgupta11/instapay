import React from 'react'
import Office1 from '../../public/images/Office1.png'
import Office2 from '../../public/images/Office2.png'
import Office3 from '../../public/images/Office3.png'
import Office4 from '../../public/images/Office4.png'
import Office5 from '../../public/images/Office5.png'
const OfferPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <div className='flex flex-row gap-10 bg-blue-100 p-2 rounded-lg'>
            <img src={Office1.src} />
            <div className='flex flex-col'>
            <h1 className='text-gray-500 font-bold'>Mobile Recharge Offer</h1>
            <h1 className='text-gray-500 font-bold'>Use Code FIRST20</h1>
            <p className='text-gray-400 text-sm'>Get 20% instant cashback upto Rs 50 on<br></br>
            your first mobile recharge. T&C apply</p>
            </div>
        </div>
        <div className='flex flex-row gap-10 bg-red-100 p-2 rounded-lg'>
            <img src={Office2.src} />
            <div className='flex flex-col '>
            <h1 className='text-gray-500 font-bold'>DTH Recharge Offer</h1>
            <h1 className='text-gray-500 font-bold'>Use Code FIRSDTHT20</h1>
            <p className='text-gray-400 text-sm'>Get 20% instant cashback upto Rs 50 on<br></br>
            your first DTH recharge. T&C apply</p>
            </div>
        </div>
        <div className='flex flex-row gap-10 bg-green-100 p-2 rounded-lg'>
            <img src={Office3.src} />
            <div className='flex flex-col'>
            <h1 className='text-gray-500 font-bold'>Flipkart Shopping Offer</h1>
            <p className='text-gray-400 text-sm'>Show on Flipkart using our payment system
            to get upto 50% cashbacks. T&C apply</p>
            </div>
        </div>
        <div className='flex flex-row gap-10 bg-yellow-100 p-2 rounded-lg'>
            <img src={Office4.src} />
            <div className='flex flex-col'>
            <h1 className='text-gray-500 font-bold'>Money Transfer Offer</h1>
            <p className='text-gray-400 text-sm'>Get a scrath card with assured cashback and<br></br>
            coupons on Monday Transfer of Rs 500 or <br></br>
            more. T&C apply</p>
            </div>
        </div>
        <div className='flex flex-row gap-10 bg-gray-100 p-2 rounded-lg'>
            <img src={Office5.src} />
            <div className='flex flex-col'>
            <h1 className='text-gray-500 font-bold'>Rs 50 Off on Flights</h1>
            <p className='text-gray-400 text-sm'>Get instant discount on flat 50 Rs on Flight<br></br>
            ticket booking. T&C apply</p>
            <h1 className='text-gray-500 font-bold'>Go to offer page</h1>
            </div>
        </div>
    </div>
  )
}

export default OfferPage