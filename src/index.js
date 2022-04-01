import * as Vue from 'vue/dist/vue.esm-bundler.js';

const Num = {
    props: ['number'],
    template: `
      <div v-bind:class="getClass(number)">{{ number }}!</div>`,
    methods: {
        isEven(number) {
            return number % 2 === 0;
        },
        getClass(num) {
            return this.isEven(num) ? 'red' : 'blue'
        },

    }
}

const app = Vue.createApp({
    components: {
        Num
    },
    template: `
      <div>

      <h1>{{ msg }}</h1>
      <button v-on:click="increment">Increment</button>
      <p>{{ count }}</p>

      <num
          v-for="number in numbers"
          v-bind:number="number"/>

      <input
          type="checkbox"
          v-model="value"
          value="user"
      />
      <input
          value="rest"
          v-model="value"
          type="checkbox">

      <div class="blue">
        {{ value }}
      </div>

      <div class="red">
        {{ error }}
      </div>

      </div>
    `,
    data() {
        return {
            msg: 'Hello JuanC!',
            count: 0,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            value: ["user"]
        }
    },
    methods: {
        increment() {
            this.count++;
        },

        isOdd() {
            return this.count % 2 !== 0;
        },

        input($event) {
            console.log($event.target.value)
            this.value = $event.target.value

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