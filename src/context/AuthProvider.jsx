import React, { createContext , useState , useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // localStorage.clear(); //to clear localStorage 
    const [userData, setuserData] = useState({ employees: []})


    useEffect(() => {
      setLocalStorage();
        const {employees} = getLocalStorage()
        setuserData(employees)
    
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>

        {children}

        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider