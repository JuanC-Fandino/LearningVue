<template>
    <form @submit.prevent="submit">
        <MyInput
            :error="username.error"
            name="Username"
            v-bind:rules="{required: true, min: 5}"
            v-bind:value="username.value"
            @customEvent="updateLocalValue"
        />
        <MyInput
            :error="password.error"
            name="Password"
            type="password"
            v-bind:rules="{required: true, min: 10}"
            v-bind:value="password.value"
            @customEvent="updateLocalValue"
        />
        <MyButton
            :disabled=isDisabled
            background="darkslateblue"
            color="white">
        </MyButton>
    </form>
</template>

<script>
import MyInput from "./MyInput.vue";
import MyButton from "./MyButton.vue";

export default {
    components: {
        MyInput,
        MyButton
    },
    // Data = method = returns something, returns an object.
    // Object always with " key:val "
    data() {
        return {
            username: {
                value: 'juan',
                error: ""
            },
            password: {
                value: 'pass',
                error: ""
            }
        }
    },
    computed: {
        isDisabled() {
            return !(!this.username.error && !this.password.error)
        }
    },
    methods: {
        updateLocalValue({name, value, error}) {
            this[name].value = value
            this[name].error = error
        },
        submit($event){
            console.log($event);
        }
    }
}
</script>

<style scoped>
</style>