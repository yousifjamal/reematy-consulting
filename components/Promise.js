import React from 'react'
import { BsCashCoin } from "react-icons/bs";
import {AiOutlineLineChart} from "react-icons/ai";

const Promise = () => {
    
  return (
    <div className='bg-gradient-to-tr from-black to-slate-600 h-[90vh] items-center flex justify-center'>
        <div className='flex-row'>
          <h1 className='text-5xl sm:text-7xl text-center text-white/75 mt-5 mb-5 font-serif'>OUR PROMISE</h1>

          <div className='flex-row sm:flex font-mono ml-3'>
            <div className='mt-10 h-[30vh] w-[80vw] sm:h-[60vh] sm:w-[40vw] bg-gradient-to-tr from-slate-900 to-gray-500 flex-row text-white/75 justify-center items-center shadow-2xl rounded-2xl sm:mr-[10vw] text-center'>
               <h2 className='text-xl sm:text-4xl underline mt-[6vh] '>Optimizing Outreach</h2>
               <AiOutlineLineChart size={75} className="sm:hidden inline text-green-600"/>
               <AiOutlineLineChart size={300} className="hidden lg:inline mt-5 mb-10 text-green-600"/>
               <h5 className='sm:text-xl text-sm p-5 text-slate-400'>Take your business to the online audience with our niche-tailored websites: Our websites operate perfectly on both mobile and web-browsers.</h5>
            </div>

            <div className='mt-10 h-[30vh] w-[80vw] sm:h-[60vh] sm:w-[40vw] bg-gradient-to-tr from-slate-900 to-gray-500 text-white/75 flex-row justify-center items-center text-center shadow-2xl rounded-2xl'> 
              <h2 className='text-xl sm:text-4xl underline mt-[6vh] '>Creating Commerce</h2>
              <BsCashCoin size={75} className="sm:hidden inline mt-4 text-green-600"/>
              <BsCashCoin size={300} className="hidden lg:inline mt-10 mb-10 text-green-600"/>
              <h5 className='sm:text-xl text-sm text-slate-400 p-5'>Expand your marketshare by selling online to customers anywhere! Our payment model ensures you can sell & ship to various countries.</h5>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Promise