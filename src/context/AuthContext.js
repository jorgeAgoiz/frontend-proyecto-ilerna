import React, { useState } from 'react'

const completeUser = {
  username: null,
  id: null,
  created_at: null
}

export const AuthContext = React.createContext({})

export const AuthContextProvider = ({ children }) => {
  const [userLog, setUserLog] = useState(completeUser)

  return (
    <AuthContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </AuthContext.Provider>
  )
}
