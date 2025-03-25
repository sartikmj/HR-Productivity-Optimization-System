import React from 'react'

//Login will not be visible normally now , bcz only AuthContext will be visible on the webpage , to make Login visible we 
//pass the children as props in AuthContext
const AuthContext = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default AuthContext