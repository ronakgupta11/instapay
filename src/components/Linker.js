import Link from 'next/link'
import React from 'react'

function Linker({bg,icon,link,name}) {
  return (
    <Link href={link} className='flex items-center  h-16 m-2 w-[45%]'>
        <div className='p-3 rounded-xl bg-[#d200bd26] h-full flex items-center'>
{icon}
        </div>
        <div className='rounded-r-xl text-center h-full bg-[#EDEFFF]  text-gray-500 text-md flex items-center px-2  font-medium'>
            {name}

        </div>

    </Link>
  )
}

export default Linker