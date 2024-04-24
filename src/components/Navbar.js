import Link from 'next/link'
import React from 'react'
import { FaRegBell,FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
function Navbar() {
    const [hideConnectBtn, setHideConnectBtn] = useState(false);
    const { connect } = useConnect();

    useEffect(() => {
        if (window.ethereum && window.ethereum.isMiniPay) {
            setHideConnectBtn(true);
            connect({ connector: injected({ target: "metaMask" }) });
        }
    }, []);

  return (
    <div className='flex flex-col  items-center justify-between w-full h-40 rounded-b-3xl bg-white'>
        <div className='flex items-center justify-between px-4 my-4 w-full h-24'>
            <Link href={"/profile"} className='w-14 h-14 rounded-full bg-gray-100'>

            <img src='https://picsum.photos/200/300' className='rounded-full w-14 h-14'></img>
            </Link>
            <div className=' flex items-center h-14 bg-gray-100 rounded-full mx-2 p-3 space-x-2 '>
<input placeholder='Search...' className='bg-transparent h-full  rounded-full focus:ring-0 '></input>
<FaMagnifyingGlass className='w-6 h-6 text-[#696D78]'/>
            </div>
            <div className='bg-gray-100 rounded-full p-4'>
                <FaRegBell className='w-6 h-6 text-[#696D78]'/>
            </div>
        </div>
        <div className='flex items-center justify-around w-full px-4 mt-4 h-10 text-gray-500 text-xl font-bold'>
            <Link href={"/home"} className='border-b-4 border-blue-600 text-blue-600 pb-2'>Home</Link>
            <Link href={"/recieve"} className=' pb-2'>Balance</Link>
            <Link href={"/offers"} className=' pb-2'>Offers</Link>
            <Link href={"/rewards"} className=' pb-2'>Rewards</Link>
        </div>
    </div>
  )
}

export default Navbar