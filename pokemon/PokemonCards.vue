<template>
    <div class="cards">
        <Card
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            :class="{
                opace: selectedId && pokemon.id !== selectedId
            }"
            class="card"
            @click="click(pokemon)"
        >
            <template v-slot:title>
                {{ pokemon.name }}
            </template>
            <template v-slot:content>
                <img :src="pokemon.sprite">
            </template>
            <template v-slot:description>
                <div
                    v-for="type in pokemon.types"
                    :key="type"
                >
                    {{ type }}
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from "./Card.vue";

export default {
    name: "PokemonCards",
    components: {
        Card
    },
    props: {
        pokemons: {
            type: Array,
            default: []
        },
        selectedId: {
            type: Number,
            default: null
        }
    },
    methods: {
        click(pokemon) {
            this.$emit("chosen", pokemon)
        }
    }
}
</script>

<style scoped>
.cards {
    display: flex;
}

img {
    width: 100%;
}

.opace {
    opacity: 0.5;
}

.card:hover {
    opacity: 1;
}
</style>