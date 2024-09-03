import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-[#0E112D] px-8 py-20 text-white sm:flex'>
     <div className='sm:min-h-[65vh] sm:w-3/5 sm:flex sm:flex-col sm:items-start sm:justify-between '>
     <h2 className='text-3xl sm:text-5xl text-orange-600 my-3'>Contact Us</h2>
     <p className='text-sm text-orange-600 mb-3'>Call us on :- +91 7348631366</p>
     </div>
      <form action="" className='sm:flex sm:flex-col sm:gap-3 sm:pt-8'>
        <input type="text" placeholder='Name'  className='py-1 bg-transparent border-b-2 border-gray-700 focus:outline-none placeholder-opacity-15'/>
        <input type="text" placeholder='Email' className='py-1 bg-transparent border-b-2 border-gray-700 focus:outline-none mt-2'/>
        <input type="text" placeholder='Contact No.' className='py-1 bg-transparent border-b-2 border-gray-700 focus:outline-none mt-2'/>
        <textarea name="message" rows={'2'} cols={'24'} className='py-1 block bg-transparent border-b-2 border-gray-700 focus:outline-none mt-2' placeholder='Meassage' id=""></textarea>
        <input type="submit" value="SEND" className='px-4 py-1 border-2  ml-auto border-orange-600 text-orange-600 font-semibold  rounded-xl mt-4 hover:cursor-pointer hover:text-orange-800 hover:border-orange-800' />
      </form>
      
    </div>
  )
}

export default page
