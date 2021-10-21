import React, { useState } from 'react'

export const SelectedBookContext = React.createContext({})

export const SelectedBookContextProvider = ({ children }) => {
  const [bookInfo, setBookInfo] = useState({})

  return (
    <SelectedBookContext.Provider value={{ bookInfo, setBookInfo }}>
      {children}
    </SelectedBookContext.Provider>
  )
}
