import Link from 'next/link'
import React from 'react'
import style from './style.module.scss'

const Header = () => {
  return (
    <header className={style.pokedex__header}>
      <Link href='/'>
        <h1>POKEDEX</h1>
      </Link>
    </header>
  )
}

export default Header