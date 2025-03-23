import React from 'react'

const Login = () => {
    return (
        <div className='flex h-screen w-screen items-center justify-center' >
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form className='flex flex-col items-center justify-center'>
                    <input required type="email" placeholder='Enter your email' className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-gray-400' />
                    <input required type="password" placeholder='Enter password' className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 mt-3 text-xl rounded-full placeholder:text-gray-400' />
                    <button className='text-white bg-emerald-600 mt-5 py-3 px-5 rounded-full'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login