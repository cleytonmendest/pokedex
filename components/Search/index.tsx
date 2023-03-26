import React, { useState } from 'react'
import style from './style.module.scss'

const Search = ({allPokemons, setPokemons}:any) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = async (event: any) => {
      setSearchTerm(event.target.value)

      const searchResult = allPokemons.filter((pokemon:any) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setPokemons(searchResult)
    }

  return (
    <div className={style.searchContainer}>
        <input
          className={style.searchInput} 
          type="text" value={searchTerm}
          onChange={handleSearchTermChange}
          onKeyUp={handleSearchTermChange}
          placeholder='Pesquise seu Pokemon aqui'
        />
    </div>
  )
}

export default Search