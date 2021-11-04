import React, { useState } from 'react'

export const BooksContext = React.createContext({})

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState({})

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  )
}

/* Contexto global donde compartiremos con todo el arbol de componentes, los libros disponibles en
la comunidad. */
