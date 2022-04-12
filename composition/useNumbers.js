import {computed, ref, watch} from 'vue'

// "Use" is the most common prefix for composables
// https://vueuse.org/
export function useNumbers() {
    const a = ref(0);
    const b = ref(0);
    const history = ref([])

    watch([a, b], ([newA, newB], [oldA, oldB]) => {
        if (newA !== oldA) {
            history.value.push(`A: ${oldA}->${newA}`)
            console.log(`${oldA}->${newA}`)
        }
        if (newB !== oldB) {
            console.log(`${oldB}->${newB}`)
            history.value.push(`B: ${oldB}->${newB}`)
        }
        console.log(history.value)

    })
    
    const total = computed(() => {
        return a.value + b.value
    });
    
    return {a,b, history, total}
}