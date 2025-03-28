import React, { useState } from 'react'
import { setLocalStorage } from '../utils/LocalStorage'

const Header = () => {

  // const [username, setUsername] = useState(' ')

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = (()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload(); //function to reload the page
  })

  return (
    <div className='text-white flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username👋🏻</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'>Log Out</button>
    </div>
  )
}

export default Header