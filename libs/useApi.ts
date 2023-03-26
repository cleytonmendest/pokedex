export const useApi = () => ({
    getAllPokemons: async () => {
        const fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1111&offset=0')
        const PokemonsJson = await fetchPokemons.json()

        return PokemonsJson
    },
    getSpecificPokemon : async (url: string) =>{
        const fetchPokemons = await fetch(`${url}`)
        const PokemonsJson = await fetchPokemons.json()

        return PokemonsJson
    }
})