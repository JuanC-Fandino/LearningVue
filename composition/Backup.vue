<template>
    <!--    Here we dont have to access the value, we are automatically using ref unwrapping-->
    <button @click="increment">
        {{ count }}
    </button>
    <button @click="increase('a')">
        {{ numbers.a }}
    </button>
    <button @click="increase('b')">
        {{ numbers.b }}
    </button>
    <p>
        {{ total }}
    </p>
</template>

<script>
// Reactive reference, 
import {computed, reactive, ref, watch} from 'vue'

export default {
    setup() {

        // const message = ref("Hello JuanC!");

        // Decouple reactivity - For primitive values (number, string)
        const count = ref(0); // Count is an object now!
        const increment = () => {
            // We need to access to the value property to modify it
            count.value++
        }

        // Reactive is for objects! => Is similar to data in options API
        const numbers = reactive({a: 0, b: 0})
        const increase = (n) => {
            // Here is no necessary to access the value
            numbers[n]++
        }

        const total = computed(() => {
            return count.value + numbers.a + numbers.b
        });

        //////

        /*        
        // MORE ESPECIFIC
        watch(count, (newVal) => {
                        console.log(newVal)
                    },
                    {
                        // also watch when the component is rendered/created initially
                        immediate: true
                })
        
                watch(numbers, (newVal) => {
                    console.log(`a: ${newVal.a}, b: ${newVal.b}`)
                })*/
        //////

        /*        // MAS GENERAL
                watchEffect(() => {
                    // Tambien es llamado al inicio, solo es llamado cuando cambia numbers.a
                    console.log(numbers.a)
                })*/

        // Para comparar el valor nuevo y el viejo los datos deben ser ref
        watch(numbers, (newVal, oldVal) => {
            console.log(`${oldVal.a} -> ${newVal.a}`)
        })


        return {count, increment, numbers, increase, total}
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