import React from 'react'

const TaskContext = ({children}) => {
  return (
    <div>{children}</div> //children referse to as , App is wrapped inside TaskContext so App is a children of TaskContext , Login , Dashboard etc are inside App.jsx so they are it's children
  )
}

export default TaskContext