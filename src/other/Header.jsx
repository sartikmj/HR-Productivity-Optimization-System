import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Sartik👋🏻</span></h1>
        <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'>Log Out</button>
    </div>
  )
}

export default Header