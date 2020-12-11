<template>
    <div class="note-count">Note count : <Strong> {{ noteCount }} </Strong></div>
</template>

<script>
import { EventBus } from "../Eventbus.js"

export default {
    name: "NoteCountComponent",
    data () {
        return {
            noteCount: 0
        }
    },
    created () {
        EventBus.$on("add-note", (event) => {
            console.log(event);
            this.noteCount ++;
        });
    }
}
</script>
<style lang="scss" scoped>

</style>
