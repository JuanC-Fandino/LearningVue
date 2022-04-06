<template>
    <div class="label">
        <label v-bind:for="name">{{ name }}</label>
        <div class="error">{{ error }}</div>
    </div>
    <input
        v-bind:id="name"
        :value="value"
        @input="input"
        :type="type"
    />
</template>

<script>
export default {

    // v-bind => :
    // v-on => @

    name: "MyInput",
    emits: ['customEvent'],
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        rules: {
            // min: number
            // required: boolean
            type: Object,
            default: {}
        },
        error: {
            type: String,

        },
        type: {
            type: String,
            default: "text"
        }
    },
    created() {
        this.$emit('customEvent',
            {
                value: this.value,
                name: this.name.toLocaleLowerCase(),
                error: this.validate(this.value)
            })
    },

    methods: {
        input($event) {
            this.$emit('customEvent',
                {
                    value: $event.target.value,
                    name: this.name.toLocaleLowerCase(),
                    error: this.validate($event.target.value)
                })
        },
        validate(value) {
            if (this.rules.required && value.length === 0) {
                return 'Value is required'
            }
            if (this.rules.min && this.rules.min > value.length) {
                return `The min length is ${this.rules.min}`
            }
        }
    }
}
</script>

<style scoped>
.input {
    display: flex;
    flex-direction: column;
}

.label {
    display: flex;
    justify-content: space-between;
}

.error {
    color: red;
}

.input {
    width: 100%;
}

input {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid silver;
    margin: 2px;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
}
</style>