import React from 'react'
import { BsClock } from "react-icons/bs";
import { BiObjectsVerticalBottom } from "react-icons/bi";

const BalancePage = () => {
  return (
    <div className="" >
        <div className='flex flex-col justify-center items-center shadow-lg'>
            <div className='absolute top-1 left-1'>
            <BsClock />
            </div>
            <div className='font-bold text-gray-500'>PortFolio Value</div>
            <div className='absolute top-1 right-1'>
            <BiObjectsVerticalBottom />
            </div>
            <div className='font-bold text-gray-500 text-4xl'>
            ₹54,375
            </div>
            <p className='text-gray-400 font-bold'>In 3 Accounts</p>
            <div className='flex flex-wrap gap-4 mt-4 justify-center'>
                <div className='bg-purple-100 p-4 rounded-lg'>
                    <div className='text-purple-600 text-center font-bold text-xl'>Federel Bank</div>
                    <p className='text-gray-400 text-center text-sm'>1142524899652</p>
                    <div className='text-gray-500 font-bold text-center'>16,456.05</div>
                </div>
                <div className='bg-red-100 p-4 rounded-lg'>
                    <div className='text-pink-600 text-center font-bold text-xl'>States Bank</div>
                    <p className='text-gray-400 text-center text-sm'>1142524899652</p>
                    <div className='text-gray-500 font-bold text-center'>2045.05</div>
                </div>

                <div className='bg-green-100 p-4 rounded-lg mr-40'>
                    <div className='text-blue-400 text-center font-bold text-xl'>Best Bank</div>
                    <p className='text-gray-400 text-center text-sm'>1142521547852</p>
                    <div className='text-gray-500 font-bold text-center'>35873.5</div>
                </div> 
            </div>
            <div className='flex justify-center items-center mt-8'>
            <button className='bg-blue-100 p-2 rounded-lg w-80 font-bold text-blue-600 text-lg mt-4'>Add/Manage Accounts</button>
            </div>
        </div>
        </div>
    
  )
}

export default BalancePage