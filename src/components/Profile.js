import React from "react";
import Pic from '../../public/images/Pic.png'
import { CiHeart } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineExclamation } from "react-icons/ai";
import { BiBookmarkAltMinus } from "react-icons/bi";
import Medal from "../../public/images/Medal.png"
import { AiOutlineUser } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-gray-200 rounded-lg shadow-lg flex flex-col">
    <div className="bg-gray-100 rounded-lg p-4 w-80 mb-4">
  <div className="bg-gray-300 h-10 rounded-t-lg mb-4"></div>
  <div className="">
    <img className="image h-15 w-15 rounded-full mb-2" src={Pic.src} />
    <div className="flex flex-row space-x-4">
    <div className="text-lg font-bold text-blue-600 mb-1">Elsa</div>
    <img src={Medal.src} className="h-4 w-4"/> 
    </div>
    <div className="text-xs font-semibold text-gray-600 mb-1">Level 4 Ace Member</div>
    <div className="text-xs font-semibold text-gray-600 mb-1">85%</div>
    <div className="text-xs font-semibold text-gray-600 mb-1">Lv 5</div>
    <div className=" mb-2">
      <div className="text-blue-500 text-lg font-bold mr-1">1,208</div>
      <div className="text-sm font-medium text-gray-600">Transactions</div>
    </div>
    <div className="mb-2">
      <div className="text-sm font-medium text-gray-600 mr-1">Points</div>
      <div className="text-blue-500 text-lg font-bold">726</div>
    </div>
    <div className="mb-2">
      <div className="text-sm font-medium text-gray-600 mr-1">Rank</div>
      <div className="text-blue-500 text-lg font-bold">8</div>
    </div>
    <div className="mb-1">
      <div className=" bg-white h-2 w-30 rounded-full">
        <div className="bg-blue-600 w-2/3 h-2 rounded-full"></div>
      </div>
    </div>
    <div className="mb-1 flex-wrap ">
      <div className=" bg-blue-200 rounded-md flex justify-center items-center">
        <div className="text-xs font-semibold text-gray-600">Explore</div>
      </div>
    </div>
    <div className="mb-1 flex-wrap ">
      <div className=" bg-blue-200 rounded-md flex justify-center items-center">
      <AiOutlineUser />
        <div className="text-xs font-semibold text-gray-600">Edit Profile</div>
       
      </div>
    </div>
    <div className="mb-1 flex-wrap ">
      <div className=" bg-blue-200 rounded-md flex justify-center items-center">
      <CiSettings />
        <div className="text-xs font-semibold text-gray-600">Settings</div>
      </div>
    </div>
    <div className="mb-1 flex-wrap ">
      <div className=" bg-blue-200 rounded-md flex justify-center items-center">
      <CiShare2 />
        <div className="text-xs font-semibold text-gray-600">Share</div>
      </div>
    </div>
  </div>
</div>

      <div className="flex flex-col justify-center items-center">
  <div className="bg-gray-300 rounded-md flex items-center justify-between w-80 p-4 mb-1">
    <div className="flex items-center">
      <BiBookmarkAltMinus className="mr-2" />
      <div className="text-sm font-semibold text-gray-600">All Transactions</div>
    </div>
  </div>

  <div className="bg-gray-300 rounded-md flex items-center justify-between w-80 p-4 mb-1">
    <div className="flex items-center">
      <AiOutlineExclamationCircle className="mr-2" />
      <div className="text-sm font-semibold text-gray-600">Pending Transactions</div>
    </div>
  </div>

  <div className="bg-gray-300 rounded-md flex items-center justify-between w-80 p-4 mb-1">
    <div className="flex items-center">
      <GoClock className="mr-2" />
      <div className="text-sm font-semibold text-gray-600">Refund status</div>
    </div>
  </div>

  <div className="bg-gray-300 rounded-md flex items-center justify-between w-80 p-4 mb-1">
    <div className="flex items-center">
      <AiOutlineExclamation className="mr-2" />
      <div className="text-sm font-semibold text-gray-600">Raise an issue</div>
    </div>
  </div>

  <div className="bg-gray-300 rounded-md flex items-center justify-between w-80 p-4 mb-6">
    <div className="flex items-center">
      <CiHeart className="mr-2" />
      <div className="text-sm font-semibold text-gray-600">Help and Support</div>
    </div>
  </div>

  <div className="bg-gray-300 rounded-md flex items-center justify-between w-80 p-4 mb-1">
    <div className="flex items-center">
      <AiOutlineExclamationCircle className="mr-2" />
      <div className="text-sm font-semibold text-gray-600">About Us</div>
    </div>
  </div>

  <div className="bg-gray-300 rounded-md flex items-center justify-between w-80 p-4 mb-1">
    <div className="flex items-center">
      <GoClock className="mr-2" />
      <div className="text-sm font-semibold text-gray-600">Terms and Conditions</div>
    </div>
  </div>

  <div className="bg-gray-300 rounded-md flex items-center justify-between w-80 p-4 mb-1">
    <div className="flex items-center">
      <AiOutlineExclamation className="mr-2" />
      <div className="text-sm font-semibold text-gray-600">Feedback</div>
    </div>
  </div>
</div>

    </div>
  </div>
  );
};

export default Profile