import Linker from '@/components/Linker'
import LinkerShort from '@/components/LinkerShort';
import Navbar from '@/components/Navbar'
import React from 'react'
import { LuScanLine } from "react-icons/lu";
function home() {
  return (
    <div className='bg-gray-100 min-h-screen w-full'>
        <Navbar/>
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