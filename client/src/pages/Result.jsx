import React from 'react'
import { assets } from '../assets/assets/assets'

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
    
    <div className='bg-white rounded-lg px-8 py-6 drop-shadow-1m'>
      {/*--- image container----*/}
      <div className='flex flex-col sm:grid grid-col-2 gap-8'>
         {/*--- left side-----*/}
         <div>
          <p className='font-semi:bold text-gray-600 mb-2'>orignal</p>
          <img className='rounded-md border' src={assets.image_w_bg} alt=''/>
         </div>
          {/*--- right side----*/}
          <div className='flex flex-col'>
            <p className='font-semi:bold text-gray-600 mb-2'>back ground removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              <img src={assets.image_wo_bg} alt=''/>

              {/*<div>
              <div className='absolute right-1/2  bottom-1/2 transform transulate-x-1/2 transulate-y-1/2'>
                          <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
                          </div>*/}
              </div>
            </div>
          </div>
      {/*---buttons--*/}
      <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
        <button className='px-8 py-2.5 text-violet-600-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>try another image</button>
        <a className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-funchisa-500 rounded-full hover:scale-105 transition-all duration-700' href=''> download image</a>
      </div>
      </div>
    </div>
  
  )
}

export default Result
