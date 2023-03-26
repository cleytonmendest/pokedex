import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import CardPokemon from '../components/CardsPokemon'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'
import { useApi } from '../libs/useApi'
import styles from '../styles/Home.module.scss'

const Home = (data: Props) => {
  const [pokemons, setPokemons] = useState<any>([])
  const { results } = data.AllPokemons
  
  const getPokemonsInfo = async (results:any) => {
    const api = useApi()
    const onlyTwenty = results.slice(0, 20)

    const pokemonsPayload = await Promise.all(
      onlyTwenty.map(async (item: any) => {
        const { sprites, types, id, height, weight, stats } = await api.getSpecificPokemon(item.url)
        return {
          id,
          name: item.name,
          types,
          sprites,
          height,
          weight,
          stats
        }
      }
      )
    )
    setPokemons(pokemonsPayload)
  }

  useEffect(() => {
    getPokemonsInfo(results)
  }, [])

  console.log(pokemons)

  return (
    <div className={styles.container}>
      <Head>
        <title>My Pokedex</title>
        <meta name="description" content="My pokedex, feito quando estava com tédio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.mainContainer}>
        <Search allPokemons={results} setPokemons={getPokemonsInfo} />
        {!pokemons.length && 
          <h3>Nenhum pokemon encontrado :/ </h3>
        }
        <div className={styles.pokedex__pokemonsContainer}>
          {pokemons && pokemons.map((pokemon: any, index: number) => {
            return <CardPokemon key={index} pokemon={pokemon} />
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home

type Props = {
  AllPokemons: any
}

export const getServerSideProps: GetServerSideProps = async () => {
  const api = useApi()
  const AllPokemons = await api.getAllPokemons()

  return {
    props: {
      AllPokemons
    }
  }
}