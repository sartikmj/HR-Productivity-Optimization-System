import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  
    
  // },)
  
  const [user , setUser] = useState(null)
  const authData = useContext(AuthContext) //to use Context
  console.log()

  //handle login , check if email and password matches
  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password=='123'){
      setUser('admin')
    }
    else if(authData && authData.employees.find((e))){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials")
    }
  }

  // handleLogin('user@me.com',123); //we will passs this handle login inside Login component




  return (
    <>
      {!user? <Login handleLogin={handleLogin} />:''} {/*If user is not present open Login else leave empty webpage shows nothing */}
      {user == 'admin'? <AdminDashboard /> : <EmployeeDashboard />}
      {/* passed handleLogin function inside Login component by the name of handleLogin */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App