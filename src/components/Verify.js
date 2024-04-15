import React from 'react'
import Veri from '../../public/images/Veri.png'

const Verify = () => {
  return (
    <div className=' flex flex-col h-screen'>
    <div className='flex'>
        <img src={Veri.src} className="w-full"/>
    </div>
    <div className='flex justify-center items-center'>
        <div className='text-custom-blue font-extrabold mt-4 bg-gray-100 p-2 text-center rounded-l-full'>+91</div>
        <input type='number' placeholder='Enter Mobile Number' className=' bg-gray-100 mt-4 p-2 rounded-r-full text-center text-gray-800 font-bold'/>
    </div>
    <div className='flex justify-center items-center mt-8'>
        <button className='bg-custom-blue p-2 rounded-full w-64 font-bold text-white text-lg'>Verify</button>
    </div>
    <p className='text-gray-400 flex justify-center items-center mt-3 text-xs'>Your personal details are safe with us</p>
    <p className='text-gray-400 flex justify-center items-center mt-3 text-xs'>Read our Privacy Policy and Terms and Conditions</p>
</div>
  )
}
export default Verify