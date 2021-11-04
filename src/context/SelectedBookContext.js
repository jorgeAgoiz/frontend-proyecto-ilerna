import React, { useState } from 'react'

export const SelectedBookContext = React.createContext({})

export const SelectedBookContextProvider = ({ children }) => {
  const [bookInfo, setBookInfo] = useState({
    selected: false,
    book: {}
  })

  return (
    <SelectedBookContext.Provider value={{ bookInfo, setBookInfo }}>
      {children}
    </SelectedBookContext.Provider>
  )
}

/* Contexto global donde compartiremos con todo el arbol de componentes, el libro que hayamos seleccionado
para visualizar, modificar o al que añadir una reseña. */
