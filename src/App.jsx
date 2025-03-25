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

  //checking who is logged in in Local Storage
  useEffect(() => {
    
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }

  }, [authData]) //if authData is present it will run again
  

  //handle login , check if email and password matches
  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'})) //add another key in data named loggedInUser with value {role:admin}
    }
    else if(authData && authData.employees.find((e)=>email==e.email&& e.password==password)){
      setUser('employee')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
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