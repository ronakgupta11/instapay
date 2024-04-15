import React from 'react'

import Logo from "../../public/images/Logo.png"

const Homepage = () => {
  return (
    <div className=' flex flex-col justify-between h-screen'>
        <div className='flex items-center justify-center h-full'>
            <img src={Logo.src} className=""/>
        </div>
    <div className="flex justify-center">
    <button className='bg-custom-blue hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded text-xl'>INSTANT PAY</button>
    
     </div>
     <p className='flex mb-20 justify-center text-custom-blue'>Your Perfect Payment Partner</p>
    <div className="flex justify-center space-x-1 mb-4">
      <div className="h-2 w-2 bg-custom-blue hover:bg-gray-500 rounded-full"></div>
      <div className="h-2 w-2 bg-custom-blue hover:bg-gray-500 rounded-full"></div>
      <div className="h-2 w-2 bg-custom-blue hover:bg-gray-500 rounded-full"></div>
      <div className="h-2 w-2 bg-custom-blue hover:bg-gray-500 rounded-full"></div>
     </div>
     </div>

  )
}

export default Homepage