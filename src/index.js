import * as Vue from 'vue/dist/vue.esm-bundler.js';

const Num = {
    props: ['number'],
    template: `
      <button 
          v-bind:class="getClass(number)"
          v-on:click="click"
      >
        {{ number }}
      </button>`,
    methods: {
        isEven(number) {
            return number % 2 === 0;
        },
        getClass(num) {
            return this.isEven(num) ? 'red' : 'blue'
        },
        click(){
            this.$emit("chosen", this.number)
            console.log(this.number);
        }

    }
}

const app = Vue.createApp({
    components: {
        Num
    },
    template: `
      <num
          v-for="number in numbers"
          v-bind:number="number"
          v-on:chosen="addNumber"
      />
      
    `,
    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    },
    methods: {
        addNumber(receivedItem){
            this.numbers.push(receivedItem)
        }
    },

    // Function with no arguments
    computed: {
        error() {
            return (this.value.length < 5 ? 'Esto tendría que ser mas largo' : '')
        }
    }
});
app.mount('#app')