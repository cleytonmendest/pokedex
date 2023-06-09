import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'

const CardPokemon = ({ pokemon }: any) => {
    const { front_default } = pokemon.sprites?.other["official-artwork"]
    const { types, id, weight, height, stats }: any = pokemon
    const heightDiv = (height / 10).toLocaleString('pt-BR')
    const weightDiv = (weight / 10).toLocaleString('pt-BR')

    const basicStats = stats.filter((stat: any) => stat.stat.name === "hp" || stat.stat.name === "attack" || stat.stat.name === "defense" || stat.stat.name === "speed")

    const typeColors: any = {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        electric: '#F8D030',
        grass: '#78C850',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC'
    }

    return (
        <Link
            href={`/${pokemon.name}`}
            className={styles.pokedex__cardPokemon}
        >
            <div className={styles.idArea}>
                <p>ID: {id}</p>
            </div>
            <img className={styles.cardPokemon__image} src={front_default} />
            <div className={styles.generalInfoContainer}>
                <h3 className={styles.cardPokemon__pokemonName}>{pokemon.name}</h3>
                <div className={styles.basicsInfoContainer}>
                    <h5>Informações Básicas</h5>
                    <div className={styles.basicsInfo}>
                        <p>Altura: {heightDiv}m</p>
                        <p>Peso: {weightDiv} kg</p>
                    </div>
                </div>
                <div className={styles.statsInfoContainer}>
                    <h5>Status Básicos</h5>
                    <div className={styles.statsInfo}>
                        {basicStats && basicStats.map((stat: any, index: number) => {
                            const nameStat = stat.stat.name.toUpperCase()

                            return (<p key={index}>{nameStat}: {stat.base_stat}</p>)
                        })}
                    </div>
                </div>

                <div className={styles.cardPokemon__typesArea}>
                    {types && types.map((types: any, index: number) => {
                        const { type } = types

                        return <p key={index} style={{ backgroundColor: typeColors[type.name] }} className={styles.typesArea__typeName}>{type.name}</p>
                    })}
                </div>
            </div>
        </Link>

    )
}

export default CardPokemon