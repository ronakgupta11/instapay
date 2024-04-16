import React from 'react'
import QRCode from 'react-qr-code';
import { RxCrossCircled } from "react-icons/rx";
import { BiCopy } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

const RecievePage = () => {
    
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className='flex items-center'>
      <h1 className="text-xl font-bold mb-4">Recieve Money</h1>
      <RxCrossCircled className=' ml-24 mb-3 h-6 w-6'/>
      </div>
      <div className="flex justify-center">
        <QRCode value={`8769333482`} size={256} className='rounded-lg'/>
      </div>
    </div>
    <div className='mt-6 mr-44 font-bold text-gray-700 text-xl'>
         Other Options
    </div>
    <div className='relative mt-4'>
        <div className="flex flex-row"> 
        <input className='bg-blue-100 p-2 rounded-lg w-full font-bold text-white text-lg pl-16 text-end' placeholder='elsa@524899652'/>
        <BiCopy className='mt-4'/>
        </div>

        <div className='absolute top-0 left-0 pl-2 pt-2 text-gray-500 font-bold'>Your Pay Id</div>
    </div>
    <div className="bg-blue-100 flex items-center justify-between w-80 p-2 mb-6 mt-4">
    <button className="flex items-center rounded-lg">
      
      <div className="text-lg font-bold text-custom-blue">Show bank account details</div>
      <IoIosArrowForward className="ml-12 text-custom-blue text-lg font-bold" />
    </button>
  </div>
  </div>
  
  )
}

export default RecievePage