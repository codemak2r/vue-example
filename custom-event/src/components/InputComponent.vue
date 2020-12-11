<template>
    <div>
        <input type="text" v-model="input" 
        @keyup.enter="moniterEnterKey" class="input is-small" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: "InputComponent",
    props:["placeholder"],
    data () {
        return {
            input: ''
        }
    },
    methods: {
        moniterEnterKey () {
            this.$emit('add-note', {
                note: this.input,
                timestamp: new Date().toLocaleString()
            });
            this.input = '';
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
