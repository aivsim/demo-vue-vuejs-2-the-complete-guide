<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName()">Reset Name</button>
        <button @click="resetFn()">Reset Fn</button>
    </div>
</template>

<script>
    export default {
        props: {
            myName: {
                type: String,
                // required: true,
                // default: 'Max'
            },
            resetFn: Function,
            userAge: Number
        },
        // props: {
        //     myName: String // or [String, Array] for multiple types
        // },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Max';
                this.$emit('nameWasReset', this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
