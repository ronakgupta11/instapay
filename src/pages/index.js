import Linker from '@/components/Linker'
import LinkerShort from '@/components/LinkerShort';
import React from 'react'
import { LuScanLine } from "react-icons/lu";
import { useAccount } from "wagmi";
import { useState,useEffect } from 'react';
function home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }

  return (
    <div className='bg-gray-100 w-full'>
        <div className='flex flex-col p-2 space-y-4' >
            <div className='text-2xl font-medium pl-2 '>
                Money Transfer

            </div>
            <div className='flex flex-wrap '>

            <Linker name={"Scan Qr Code"} icon={<LuScanLine className='w-8 h-8 text-gray-500'/>} link={"/href"}/>
            <Linker name={"Scan Qr Code"} icon={<LuScanLine className='w-8 h-8 text-gray-500'/>} link={"/href"}/>
            <Linker name={"Scan Qr Code"} icon={<LuScanLine className='w-8 h-8 text-gray-500'/>} link={"/href"}/>
            <Linker name={"Scan Qr Code"} icon={<LuScanLine className='w-8 h-8 text-gray-500'/>} link={"/href"}/>
            </div>
        </div>
        <div className='flex flex-col p-2 space-y-4' >
            <div className='text-2xl font-medium pl-2 '>
                Money Transfer
          {  `  your wallet address :  ${userAddress}`}
            </div>
            <div className='flex flex-wrap '>

            <Linker name={"Scan Qr Code"} icon={<LuScanLine className='w-8 h-8 text-gray-500'/>} link={"/href"}/>
            <Linker name={"Scan Qr Code"} icon={<LuScanLine className='w-8 h-8 text-gray-500'/>} link={"/href"}/>
            <Linker name={"Scan Qr Code"} icon={<LuScanLine className='w-8 h-8 text-gray-500'/>} link={"/href"}/>
            <Linker name={"Scan Qr Code"} icon={<LuScanLine className='w-8 h-8 text-gray-500'/>} link={"/href"}/>
            </div>
        </div>
        <div className='flex flex-col p-2 space-y-4' >
            <div className='text-2xl font-medium pl-2 '>
              Ticket Booking
            </div>
            <div className='flex'>

            <LinkerShort name={"Flights"} icon={<LuScanLine className='w-8 h-8 text-purple-500 '/>} link={"/href"}/>
            <LinkerShort name={"Flights"} icon={<LuScanLine className='w-8 h-8 text-purple-500 '/>} link={"/href"}/>
            <LinkerShort name={"Flights"} icon={<LuScanLine className='w-8 h-8 text-purple-500'/>} link={"/href"}/>
            <LinkerShort name={"Flights"} icon={<LuScanLine className='w-8 h-8 text-purple-500'/>} link={"/href"}/>
            <LinkerShort name={"Flights"} icon={<LuScanLine className='w-8 h-8 text-purple-500'/>} link={"/href"}/>

            </div>
        </div>
    </div>
  )
}

export default home