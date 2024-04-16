import React from 'react'
import Link from 'next/link'
function LinkerShort({bg,icon,link,name}) {
  return (
    <Link href={link} className='flex flex-col items-center w-[60px]  h-[76px] m-2'>
    <div className='p-3 rounded-xl bg-[#EDEFFF] h-full flex items-center text-[
#4D5DFA/80]'>
{icon}
    </div>
    <div className=' text-center text-gray-500 text-sm mt-2'>
        {name}

    </div>

</Link>
  )
}

export default LinkerShort