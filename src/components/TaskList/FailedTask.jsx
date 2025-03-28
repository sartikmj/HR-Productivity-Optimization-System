import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-red-700 p-5 rounded-xl '>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>26 Feb 2025</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Complete React Project</h2>
      <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi cum dolore recusandae sapiente nihil?
      </p>
      <div className='mt-2 '>
        <button className='w-full'>Failed</button>
      </div>
    </div>
  )
}

export default FailedTask