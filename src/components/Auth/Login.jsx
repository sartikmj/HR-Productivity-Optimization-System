import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    
    //we need the form not to be submited when the user clicks the button , we will use Two Way Binding
    //We need to change the default behavior of the form , i.e. to reload the page after submitting the form
    //Two Way Binding
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault() //this prevent its default behaior . that reloads the page after submiting
        console.log("email is", email)
        console.log("password is", password)
        handleLogin(email,password) //when email and password passed , this method will be invoked from App.jsx
        setemail('')
        setPassword('') //this will clear the input fields after submitting
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center' >
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>

                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        required type="email" placeholder='Enter your email' className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-gray-400' />

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required type="password" placeholder='Enter password' className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 mt-3 text-xl rounded-full placeholder:text-gray-400' />
                    <button className='text-white bg-emerald-600 mt-5 py-3 px-5 rounded-full'>Log in</button>
                </form>
            </div>

        </div>
    )
}

export default Login