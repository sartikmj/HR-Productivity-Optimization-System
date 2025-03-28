import React, { createContext , useState , useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // localStorage.clear(); //to clear localStorage 
    const [userData, setuserData] = useState({ employees: [], admin: null })


    useEffect(() => {
      setLocalStorage();
        const {employees, admin} = getLocalStorage()
        setuserData({employees,admin})
    
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={userData}>

        {children}

        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider