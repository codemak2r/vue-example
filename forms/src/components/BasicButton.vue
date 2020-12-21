<template>
    <div id="basic-button" class="ui container">
        <h2 class="ui header">What's your favorite Fullstack clothing item?</h2> 
        <ButtonRow />
    </div>
</template>

<script>
import ButtonRow from "./ButtonRow.vue"

export default {
    name: "BasicButton",
    components: {
        ButtonRow
    }
}
</script>

<style scoped>
.ui.container { margin: 20px 0; } 
</style>
