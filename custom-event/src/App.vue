<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns has-text-centered">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="(note, index) in notes" :key="index" class="notes">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div v-for="(timestamp, index) in timestamps" :key=index class="timestamps">
            {{ timestamp }}
          </div>
        </div>
      </div>
      <InputComponent :placeholder="placeholder"/>
    </div>
    <NoteCountComponent />
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue"
import NoteCountComponent from "./components/NoteCountComponent.vue"
import { EventBus } from "./Eventbus.js"
export default {
  name: 'App',
  data() {
    return {
        notes: [],
        timestamps: [],
        placeholder: 'Enter a note'
    }
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    }
  },
  components: {
    InputComponent,
    NoteCountComponent
  },
  created() {
    EventBus.$on('add-note', event => this.addNote(event));
  }
}
</script>

<style>
#app {
  height: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
html, body {
  height: 100%;
}

.notes-section {
  width: 500px;
}

.columns {
  width: 100%;
}

.notes, .timestamps {
  padding: 5px 0px;
}

.note-count {
  margin-top: 48px;
}
</style>
