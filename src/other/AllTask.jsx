import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)

    
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-58'>
            {/* Header */}
            <div className='bg-gray-400 py-2 px-4 mb-2 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5 bg-purple-600 text-center'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5 bg-violet-600 text-center'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5 bg-purple-600 text-center'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5 bg-violet-600 text-center'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5 bg-purple-600 text-center'>Failed</h5>
            </div>
            <div className='h-[80%] overflow-auto'>
            {userData.map(function (elem,idx) {
                return  <div key={idx} className='bg-black py-2 px-4 mb-2 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5 text-white text-center'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-400 text-center'>{elem.taskNumbers.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400 text-center'>{elem.taskNumbers.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-green-400 text-center'>{elem.taskNumbers.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600 text-center'>{elem.taskNumbers.failed}</h5>
            </div>
            })}
            </div>
        </div>
    )
}

export default AllTask