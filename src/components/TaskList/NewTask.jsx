import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] bg-blue-400 p-5 rounded-xl '> 
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>26 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete React Project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi cum dolore recusandae sapiente nihil?
            </p>
            <div className='mt-4'>
                <button className='bg-orange-900 text-sm py-2 px-2 rounded-xl'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask