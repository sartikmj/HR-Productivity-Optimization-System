import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[350px] bg-red-400 p-5 rounded-xl '> 
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>26 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete React Project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi cum dolore recusandae sapiente nihil?
            </p>
        </div>
        
        <div className='flex-shrink-0 h-full w-[350px] bg-blue-400 p-5 rounded-xl '> 
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>26 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete React Project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi cum dolore recusandae sapiente nihil?
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[350px] bg-green-400 p-5 rounded-xl '> 
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>26 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete React Project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi cum dolore recusandae sapiente nihil?
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[350px] bg-yellow-400 p-5 rounded-xl '> 
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>26 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete React Project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi cum dolore recusandae sapiente nihil?
            </p>
        </div>
        
        <div className='flex-shrink-0 h-full w-[350px] bg-pink-400 p-5 rounded-xl '> 
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-small px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>26 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete React Project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi cum dolore recusandae sapiente nihil?
            </p>
        </div>

    </div>
  )
}

export default TaskList