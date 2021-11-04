import React, { useState } from 'react'

const completeUser = {
  username: null,
  id: null,
  created_at: null,
  logged: false
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
/* Contexto global donde compartiremos con todo el arbol de componentes, si el usuario esta loggeado
y en caso de ser así, los datos de dicho usuario. */
