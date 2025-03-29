import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            
            <Header changeUser={props.changeUser} data={props.data} /> {/* passing {data} variabel as a prop data inside Header component */}
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
        </div>
    )
}

export default EmployeeDashboard