import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-black text-white flex  items-center justify-center'>
      <div className="login w-[85%] min-h-[90%]  bg-gray-700 rounded-xl flex flex-col items-center justify-center">
           <div className='w-full h-1/2 flex flex-col pt-12 items-center justify-center'>
            <span className='font-semibold text-xl my-2'>LOGIN</span>
            <p className='text-sm pb-2'>Log-in to Make Magic Here</p>
            <form action="" className='flex items-center justify-center flex-col'>
              <input type="text" className='bg-gray-400 text-black placeholder-gray-700 px-2  py-1 rounded-lg mt-2' placeholder='Username' />
              <input type="password" name="" id="" className='bg-gray-400 text-black placeholder-gray-700 px-2 py-1 rounded-lg mt-2' placeholder='Password'/>
              <input type="submit" value="Login Now" className='px-3 py-2 rounded-xl bg-black text-white my-3 hover:cursor-pointer hover:bg-gray-900' />
            </form>
            <h4 className='my-4 text-xl'><span className='font-bold'>Login</span> With Others</h4>
            <button className='flex  items-center justify-center gap-3 border-2 px-6 py-3 rounded-xl border-gray-500 my-4'>
              <Image
              src={'/images/google.png'}
              width={'40'}
              height={'40'}
              className='w-[7vw] h-[3vh]'
              />
              <span><span className='font-bold'>Login</span> with google</span>
            </button>
            <button className='flex  items-center justify-center gap-3 border-2 px-6 py-3 rounded-xl border-gray-500 mb-4'>
              <Image
              src={'/images/facebook.png'}
              width={'40'}
              height={'40'}
              className='w-[7vw] h-[3vh]'
              />
              <span><span className='font-bold'>Login</span> with facebook</span>
            </button>
           </div>
      </div>
    </div>
  )
}

export default page
