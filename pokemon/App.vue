<template>
    <PokemonCards
        :pokemons="pokemons"
        :selectedId="selectedId"
        @chosen="fetchEvolutions"/>
    <PokemonCards :pokemons="evolutions"/>
</template>

<script>
import Card from "./Card.vue";
import PokemonCards from "./PokemonCards.vue";

const api = 'https://pokeapi.co/api/v2/pokemon'
export default {
    components: {
        Card,
        PokemonCards
    },
    data() {
        return {
            pokemons: [],
            pokemonIds: [1, 4, 7],
            evolutions: [],
            selectedId: 0
        }
    },
    async created() {
        this.pokemons = await this.fetchData(this.pokemonIds);
    },
    methods: {
        async fetchData(ids) {

            const responses = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)));

            const parsedData = await Promise.all(responses.map(response => response.json()));

            return parsedData.map(data => ({
                id: data.id,
                name: data.name,
                sprite: data.sprites.other["official-artwork"].front_default,
                types: data.types.map(type => type.type.name)
            }));
        },
        async fetchEvolutions(pokemon) {
            this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
            this.selectedId = pokemon.id
        }
    }
}
</script>

<style scoped>
</style>