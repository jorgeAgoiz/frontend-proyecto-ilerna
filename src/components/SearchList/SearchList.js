import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './SearchList.css'

const SearchList = () => {
  return (
    <div className='search-list'>
      <div className='main-title'>
        <h1>Libros de la comunidad</h1>
      </div>
      <SearchBar />
    </div>
  )
}

export default SearchList

/* Seguiremos planteando los estilos y estructurado del listado de libros */
