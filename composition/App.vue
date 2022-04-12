<template>
    <button @click="a++">
        {{ a }}
    </button>
    <button @click="b++">
        {{ b }}
    </button>
    <p>
        {{ total }}
    </p>
    <div
        v-for="entry in history"
        :key="entry"
    >
        {{ entry }}

    </div>
</template>

<script>

import {useNumbers} from "./useNumbers.js";

export default {
    setup() {
        
        return useNumbers()
    }
}
</script>

<style scoped>
button {
    height: 100px;
    width: 100px;
    font-size: 40px;
}

p {
    font-size: 40px;
}
</style>